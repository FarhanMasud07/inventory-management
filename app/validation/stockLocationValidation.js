import { z } from "zod";

const stockLocationSchema = z.object({
  product_id: z.number({ message: "Product is required" }),
  quantity: z
    .number({ message: "Quantiy is required" })
    .min(0, "quantity can not be negative"),
});

export { stockLocationSchema };
