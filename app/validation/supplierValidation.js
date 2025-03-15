import { z } from "zod";

const supplierSchema = z.object({
  supplier_name: z
    .string()
    .min(2, { message: "Supplier name must be at least 2 characters long." })
    .max(50, { message: "Supplier name must be at most 50 characters long." }),

  supplier_contact_person: z
    .string()
    .min(2, {
      message: "Supplier contact person must be at least 2 characters long.",
    })
    .max(50, {
      message: "Supplier contact person must at most 50 characters long.",
    }),
  supplier_phone: z.string(),
  supplier_email: z.string().email("Please provide correct email address"),
  supplier_address: z.string(
    200,
    "Suplier address must be at most 200 characters"
  ),
});

export { supplierSchema };
