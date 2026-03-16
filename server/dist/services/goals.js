import { eq } from "drizzle-orm";
import { goals } from "@paperclipai/db";
export function goalService(db) {
    return {
        list: (companyId) => db.select().from(goals).where(eq(goals.companyId, companyId)),
        getById: (id) => db
            .select()
            .from(goals)
            .where(eq(goals.id, id))
            .then((rows) => rows[0] ?? null),
        create: (companyId, data) => db
            .insert(goals)
            .values({ ...data, companyId })
            .returning()
            .then((rows) => rows[0]),
        update: (id, data) => db
            .update(goals)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(goals.id, id))
            .returning()
            .then((rows) => rows[0] ?? null),
        remove: (id) => db
            .delete(goals)
            .where(eq(goals.id, id))
            .returning()
            .then((rows) => rows[0] ?? null),
    };
}
