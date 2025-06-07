import { forwardRef } from "react";
import { ItemType } from "@workspace/schema/items";
import { ChevronRight, Folder } from "lucide-react";
import { ItemNode } from "../types";
import { cn } from "@workspace/ui/lib/utils";
import ItemCheckbox from "./ItemCheckbox";

type Props = {
  data: ItemNode;
  onCompleted?: () => void;
};

const ItemsEntry = forwardRef<HTMLDivElement, Props>(
  ({ data, ...props }, ref) => {
    const paddingLeft = `${(data.depth * 36) / 16}rem`;
    const hasChildren = data.children.length > 0;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 cursor-pointer select-none h-9 border-b",
        )}
        {...props}
        style={{ paddingLeft }}
      >
        {hasChildren && (
          <ChevronRight className="transition-transform size-4" />
        )}
        {data.item.type === ItemType.FOLDER && <Folder className="size-4" />}
        {data.item.type === ItemType.ITEM && <ItemCheckbox node={data} />}
        <div className="text-sm">{data.item.title}</div>
      </div>
    );
  },
);

export default ItemsEntry;
