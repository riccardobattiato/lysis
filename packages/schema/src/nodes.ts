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

export enum NodeType {
  LIST = "LIST",
  TASK = "TASK",
}
export const nodeTypeEnum = pgEnum("node_type", ["LIST", "TASK"]);

export const nodes = table(
  "nodes",
  {
    id: t.uuid().defaultRandom().primaryKey(),
    userId: t
      .uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    parentId: t
      .uuid("parent_id")
      .references((): AnyPgColumn => nodes.id, { onDelete: "cascade" }),
    type: nodeTypeEnum().notNull(),
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
    check(
      "check_list_not_completed",
      sql`type <> 'list' OR completed_at IS NULL`,
    ),
    index("nodes_user_id_idx").on(table.userId),
    index("nodes_parent_id_idx").on(table.parentId),
    index("nodes_user_id_parent_id_idx").on(table.userId, table.parentId),
    index("nodes_user_id_type_idx").on(table.userId, table.type),
  ],
);

export type SelectNode = InferSelectModel<typeof nodes>;
export type InsertNode = Omit<
  InferInsertModel<typeof nodes>,
  "createdAt" | "updatedAt"
>;

export const selectNodeSchema = createSelectSchema(nodes);
export const insertNodeSchema = createInsertSchema(nodes);
export const updateNodeSchema = createUpdateSchema(nodes);
