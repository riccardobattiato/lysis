import { SelectItem, ItemType } from "@workspace/schema/items";
import { v4 as uuidv4 } from "uuid";

const user1Id = uuidv4();
const root1Id = uuidv4();
const child1Id = uuidv4();
const grandChild1Id = uuidv4();
const folder1Id = uuidv4();

export const mockItems: SelectItem[] = [
  {
    id: root1Id,
    userId: user1Id,
    parentId: null,
    type: ItemType.ITEM,
    title: "Buy groceries",
    description: "Milk, Eggs, Bread",
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: child1Id,
    userId: user1Id,
    parentId: root1Id,
    type: ItemType.ITEM,
    title: "Get milk",
    description: null,
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: grandChild1Id,
    userId: user1Id,
    parentId: child1Id,
    type: ItemType.ITEM,
    title: "Organic whole milk",
    description: null,
    completedAt: new Date(),
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    userId: user1Id,
    parentId: root1Id,
    type: ItemType.ITEM,
    title: "Pay bills",
    description: "Electricity and Internet",
    completedAt: new Date(),
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: folder1Id,
    userId: user1Id,
    parentId: null,
    type: ItemType.FOLDER,
    title: "Work Projects",
    description: null,
    completedAt: null,
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    userId: user1Id,
    parentId: folder1Id,
    type: ItemType.ITEM,
    title: "Finish report Q2",
    description: null,
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
