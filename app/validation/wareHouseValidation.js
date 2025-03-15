import { z } from "zod";

const wareHouseSchema = z.object({
  warehouse_name: z
    .string({ message: "name is required" })
    .min(2, "name should be minimum 2 characters")
    .max(100, "name should not maximum 100 characters"),
  location: z
    .string({ message: "location is required" })
    .min(2, "location should be minimum 2 characters"),
});

export { wareHouseSchema };
