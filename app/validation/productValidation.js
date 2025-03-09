import { z } from "zod";

// Define validation schema for adding a product
const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  price: z.number().positive("Price must be greater than zero"),
  description: z.string().max(200, "Description at most 200 characters"),
  stock_quantity: z.number().positive("Stock quantity can not be negative"),
  reorder_level: z.number().min(10, "Minimum reorder is 10"),
  barcode: z.string(),
});

export { productSchema };
