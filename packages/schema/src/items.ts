import * as t from "drizzle-orm/pg-core";
import {
  type AnyPgColumn,
  pgEnum,
  pgTable as table,
  index,
  check,
} from "drizzle-orm/pg-core";
import { users } from "./users.js";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const itemTypeEnum = pgEnum("item_type", ["FOLDER", "ITEM"]);

export const items = table(
  "items",
  {
    id: t.uuid().defaultRandom().primaryKey(),
    userId: t
      .uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    parentId: t
      .uuid("parent_id")
      .references((): AnyPgColumn => items.id, { onDelete: "cascade" }),
    type: itemTypeEnum().notNull(),
    title: t.text().notNull(),
    description: t.text(),
    completedAt: t.timestamp("completed_at", { withTimezone: true }),
    siblingOrder: t.doublePrecision("sibling_order").notNull().default(0),
    createdAt: t.timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: t
      .timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    check("check_parent_id_not_self", sql`id <> parent_id`),
    index("items_user_id_idx").on(table.userId),
    index("items_parent_id_idx").on(table.parentId),
    index("items_user_id_parent_id_idx").on(table.userId, table.parentId),
    index("items_user_id_type_idx").on(table.userId, table.type),
  ],
);

export type SelectItem = InferSelectModel<typeof items>;
export type InsertItem = Omit<
  InferInsertModel<typeof items>,
  "createdAt" | "updatedAt"
>;

export const selectItemSchema = createSelectSchema(items);
export const insertItemSchema = createInsertSchema(items);
export const updateItemSchema = createUpdateSchema(items);
