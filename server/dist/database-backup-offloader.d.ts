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
export declare function createDatabaseBackupOffloader(config: DatabaseBackupOffloaderConfig): DatabaseBackupOffloader;
//# sourceMappingURL=database-backup-offloader.d.ts.map