import path from "node:path";
import { promises as fs } from "node:fs";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export type DatabaseBackupTarget = "local" | "s3";

export type DatabaseBackupOffloaderConfig = {
  target: DatabaseBackupTarget;
  s3Bucket: string;
  s3Region: string;
  s3Endpoint?: string;
  s3Prefix: string;
  s3ForcePathStyle: boolean;
  deleteLocalOnSuccess: boolean;
};

export type DatabaseBackupOffloadResult = {
  uploaded: boolean;
  localDeleted: boolean;
  bucket?: string;
  objectKey?: string;
};

export type DatabaseBackupOffloader = {
  target: DatabaseBackupTarget;
  summary: string;
  offload(backupFilePath: string): Promise<DatabaseBackupOffloadResult>;
};

function normalizePrefix(prefix: string): string {
  return prefix.trim().replace(/^\/+/, "").replace(/\/+$/, "");
}

function buildObjectKey(prefix: string, backupFilePath: string): string {
  const fileName = path.basename(backupFilePath);
  if (!prefix) return fileName;
  return `${prefix}/${fileName}`;
}

function createLocalOffloader(): DatabaseBackupOffloader {
  return {
    target: "local",
    summary: "local filesystem",
    async offload() {
      return { uploaded: false, localDeleted: false };
    },
  };
}

export function createDatabaseBackupOffloader(config: DatabaseBackupOffloaderConfig): DatabaseBackupOffloader {
  if (config.target === "local") {
    return createLocalOffloader();
  }

  const bucket = config.s3Bucket.trim();
  if (!bucket) {
    throw new Error("PAPERCLIP_DB_BACKUP_TARGET=s3 requires PAPERCLIP_DB_BACKUP_S3_BUCKET");
  }

  const region = config.s3Region.trim() || "auto";
  const prefix = normalizePrefix(config.s3Prefix);
  const client = new S3Client({
    region,
    endpoint: config.s3Endpoint,
    forcePathStyle: config.s3ForcePathStyle,
  });

  const summary = `s3://${bucket}${prefix ? `/${prefix}` : ""}`;
  return {
    target: "s3",
    summary,
    async offload(backupFilePath: string) {
      const objectKey = buildObjectKey(prefix, backupFilePath);
      const backupFile = await fs.readFile(backupFilePath);
      await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: objectKey,
        Body: backupFile,
        ContentType: "application/sql",
      }));

      let localDeleted = false;
      if (config.deleteLocalOnSuccess) {
        try {
          await fs.unlink(backupFilePath);
          localDeleted = true;
        } catch {
          localDeleted = false;
        }
      }

      return {
        uploaded: true,
        localDeleted,
        bucket,
        objectKey,
      };
    },
  };
}
