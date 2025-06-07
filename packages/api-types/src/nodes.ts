import { z } from "zod";
import { selectNodeSchema as dbNodeSchema } from "@workspace/schema/nodes";

export const apiNodeSchema = dbNodeSchema.extend({
  childCount: z.number().int().min(0),
});
