import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import * as t from "drizzle-orm/pg-core";
import { pgTable as table } from "drizzle-orm/pg-core";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const users = table("users", {
  id: t.uuid().defaultRandom().primaryKey(),
  name: t.text().notNull(),
  email: t.text().notNull().unique(),
  password: t.text().notNull(),
  createdAt: t.timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: t
    .timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type SelectUser = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;

export const selectUserSchema = createSelectSchema(users);
export const insertUserSchema = createInsertSchema(users);
export const updateUserSchema = createUpdateSchema(users);
