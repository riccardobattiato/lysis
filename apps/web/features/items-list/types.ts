import { SelectItem } from "@workspace/schema/items";

export type ItemNode = {
  item: SelectItem;
  children: ItemNode[];
};

export type ItemsTree = ItemNode[];
