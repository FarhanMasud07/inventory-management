import { z } from "zod";

// Define validation schema for adding a product
const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  price: z.number().positive("Price must be greater than zero"),
});

export { productSchema };
