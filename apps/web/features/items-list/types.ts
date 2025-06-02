import { SelectItem } from "@workspace/schema/items";

export type ItemNode = {
  item: SelectItem;
  depth: number;
  children: ItemNode[];
};

export type ItemsTree = ItemNode[];
