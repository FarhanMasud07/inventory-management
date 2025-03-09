import { z } from "zod";

const userSchema = z.object({
  name: z.string().max(100, "User name should not exceed 100 characters"),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/,
      {
        message:
          "Password should be 1 capital character, 1 special character, 1 number, 1 small character",
      }
    ),
  email: z.string().email("Please enter your email which contains @ symbol"),
});

export { userSchema };
