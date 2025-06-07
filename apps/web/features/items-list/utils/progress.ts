import { ItemNode } from "../types";

function getLeafCounts({
  item,
  children,
}: ItemNode): [completed: number, total: number] {
  // If it's a leaf
  if (children.length === 0) {
    return [item.completedAt ? 1 : 0, 1];
  }

  // Recurse into children
  return children.reduce(
    ([completedSum, totalSum], child) => {
      const [completed, total] = getLeafCounts(child);
      return [completedSum + completed, totalSum + total];
    },
    [0, 0],
  );
}

export function calcItemProgress(node: ItemNode): number {
  const [completed, total] = getLeafCounts(node);
  return total === 0 ? 0 : completed / total;
}
