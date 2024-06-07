import { pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const roles = pgEnum("role", ["admin", "doctor", "nurse" ,"patient"]);

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username").unique().notNull(),
    password: varchar("password").notNull(),
    email: varchar("email").unique().notNull(),
    role: roles("role").notNull().default("patient"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
})