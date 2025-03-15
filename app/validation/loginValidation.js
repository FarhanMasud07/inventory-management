import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ message: "Please provide email" })
    .email("Please provide correct email address"),
  password: z.string({ message: "Please provide password" }),
});

export { loginSchema };
