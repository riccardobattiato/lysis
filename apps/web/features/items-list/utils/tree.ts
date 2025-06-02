import { SelectItem } from "@workspace/schema/items";
import { ItemNode, ItemsTree } from "../types";

export function buildTree(flatArray: SelectItem[]): ItemsTree {
  // 1. Create nodes with empty children
  const map = new Map<string, ItemNode>(
    flatArray.map((item) => [item.id, { item, children: [] }]),
  );

  // 2. Assign child nodes
  for (const element of flatArray) {
    if (element.parentId) {
      const parent = map.get(element.parentId);
      const child = map.get(element.id);

      if (parent && child) {
        parent.children.push(child);
      }
    }
  }

  // 3. Return the roots as tree
  return Array.from(map, ([_id, node]) => node).filter(
    (node) => node.item.parentId === null,
  );
}
