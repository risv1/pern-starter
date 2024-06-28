import { pgEnum, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username").unique().notNull(),
    password: varchar("password").notNull(),
    email: varchar("email").unique().notNull(),
    role: varchar("role").notNull().default("user"),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
})