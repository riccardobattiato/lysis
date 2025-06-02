import { SelectItem, ItemType } from "@workspace/schema/items";
import { v4 as uuidv4 } from "uuid";

const user1Id = uuidv4();

// Root-level items & folders
const groceriesId = uuidv4();
const workFolderId = uuidv4();
const bookId = uuidv4();
const travelId = uuidv4();
const personalFolderId = uuidv4();

// Child / subtask items
const getMilkId = uuidv4();
const wholeMilkId = uuidv4();
const payBillsId = uuidv4();
const reportId = uuidv4();
const bookChapter1Id = uuidv4();
const bookChapter2Id = uuidv4();
const bookChapter3Id = uuidv4();
const packingId = uuidv4();
const passportId = uuidv4();
const buyTicketsId = uuidv4();
const codeProjectId = uuidv4();
const polishCVId = uuidv4();

export const mockItems: SelectItem[] = [
  // Task: Buy groceries
  {
    id: groceriesId,
    userId: user1Id,
    parentId: null,
    type: ItemType.ITEM,
    title: "Buy groceries",
    description: "Milk, Eggs, Bread, Fruits",
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: getMilkId,
    userId: user1Id,
    parentId: groceriesId,
    type: ItemType.ITEM,
    title: "Get milk",
    description: null,
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: wholeMilkId,
    userId: user1Id,
    parentId: getMilkId,
    type: ItemType.ITEM,
    title: "Organic whole milk",
    description: null,
    completedAt: new Date(),
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: payBillsId,
    userId: user1Id,
    parentId: groceriesId,
    type: ItemType.ITEM,
    title: "Pay bills",
    description: "Electricity and Internet",
    completedAt: new Date(),
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Folder: Work Projects
  {
    id: workFolderId,
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
    id: reportId,
    userId: user1Id,
    parentId: workFolderId,
    type: ItemType.ITEM,
    title: "Finish report Q2",
    description: "Due Friday 5PM",
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Book with chapters
  {
    id: bookId,
    userId: user1Id,
    parentId: null,
    type: ItemType.ITEM,
    title: "Read 'Deep Work' by Cal Newport",
    description: "Focus on productivity strategies",
    completedAt: null,
    siblingOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: bookChapter1Id,
    userId: user1Id,
    parentId: bookId,
    type: ItemType.ITEM,
    title: "Chapter 1: Deep Work is Valuable",
    description: null,
    completedAt: new Date(),
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: bookChapter2Id,
    userId: user1Id,
    parentId: bookId,
    type: ItemType.ITEM,
    title: "Chapter 2: Deep Work is Rare",
    description: null,
    completedAt: null,
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: bookChapter3Id,
    userId: user1Id,
    parentId: bookId,
    type: ItemType.ITEM,
    title: "Chapter 3: Deep Work is Meaningful",
    description: null,
    completedAt: null,
    siblingOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Task: Travel Preparation
  {
    id: travelId,
    userId: user1Id,
    parentId: null,
    type: ItemType.ITEM,
    title: "Plan summer trip to Spain",
    description: "Check dates, documents, bookings",
    completedAt: null,
    siblingOrder: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: packingId,
    userId: user1Id,
    parentId: travelId,
    type: ItemType.ITEM,
    title: "Pack essentials",
    description: "Clothes, laptop, chargers",
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: passportId,
    userId: user1Id,
    parentId: travelId,
    type: ItemType.ITEM,
    title: "Check passport expiry",
    description: null,
    completedAt: new Date(),
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: buyTicketsId,
    userId: user1Id,
    parentId: travelId,
    type: ItemType.ITEM,
    title: "Book flight tickets",
    description: null,
    completedAt: null,
    siblingOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Folder: Personal Growth
  {
    id: personalFolderId,
    userId: user1Id,
    parentId: null,
    type: ItemType.FOLDER,
    title: "Personal Development",
    description: null,
    completedAt: null,
    siblingOrder: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: codeProjectId,
    userId: user1Id,
    parentId: personalFolderId,
    type: ItemType.ITEM,
    title: "Refactor portfolio project",
    description: "Improve folder structure and types",
    completedAt: null,
    siblingOrder: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: polishCVId,
    userId: user1Id,
    parentId: personalFolderId,
    type: ItemType.ITEM,
    title: "Update and polish CV",
    description: "Focus on backend and fullstack skills",
    completedAt: new Date(),
    siblingOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
