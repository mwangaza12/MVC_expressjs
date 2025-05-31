import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("userTable", {
    id: serial("id").primaryKey(),
    fullName: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }).notNull().defaultNow(),
});

export type TUserInsert = typeof userTable.$inferInsert;
export type TUserSelect = typeof userTable.$inferSelect;