import { SelectItem } from "@workspace/schema/items";
import { ItemsTree } from "../types";

export function buildTree(
  items: SelectItem[],
  parentId: string | null,
  depth = 0,
): ItemsTree {
  return items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      item,
      depth,
      children: buildTree(items, item.id, depth + 1),
    }));
}
