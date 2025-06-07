import { ItemNode } from "../types";
import { calcItemProgress } from "../utils/progress";
import { Checkbox } from "@workspace/ui/components/checkbox";

type Props = {
  node: ItemNode;
  onChanged?: (value: boolean) => void;
};

const size = 16;
const stroke = 2;

const ItemCheckbox = ({ node }: Props) => {
  const progress = calcItemProgress(node);
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  if (node.children.length === 0) {
    return <Checkbox checked={!!progress} />;
  }

  return (
    <svg width={size} height={size}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb" // Tailwind gray-200
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#10b981" // Tailwind green-500
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start from top
      />
    </svg>
  );
};

export default ItemCheckbox;
