import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import { ItemNode, ItemsTree } from "../types";
import ItemsEntry from "./ItemsEntry";

type Props = {
  tree: ItemsTree;
};

export function ItemsList({ tree }: Props) {
  return (
    <ul className="items-list">
      {tree.map((node) => (
        <Tree key={node.item.id} {...node} />
      ))}
    </ul>
  );
}

function Tree(node: ItemNode) {
  if (!node.children.length) {
    return (
      <li className="items-entry">
        <ItemsEntry data={node} />
      </li>
    );
  }

  return (
    <li className="items-entry">
      <Collapsible className="group/collapsible [&[data-state=open]>div>svg:first-child]:rotate-90">
        <CollapsibleTrigger asChild>
          <ItemsEntry data={node} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="items-list">
            {node.children.map((subItem) => (
              <Tree key={subItem.item.id} {...subItem} />
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
