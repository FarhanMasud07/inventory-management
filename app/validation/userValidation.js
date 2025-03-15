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
  email: z.string().email("Please provide correct email address"),
});

const rolesAndPermissionsSchema = z.object({
  permissions: z.record(
    z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Role ID must be a positive integer.",
    }),
    z
      .array(
        z
          .number()
          .int()
          .positive()
          .min(1, { message: "Permission ID must be a positive integer." })
      )
      .nonempty({ message: "Each role must have at least one permission." })
  ),
});

const userRolesSchema = z.object({
  userId: z
    .number()
    .int()
    .positive()
    .min(1, { message: "User ID must be a positive integer." }),
  roles: z
    .array(
      z
        .number()
        .int()
        .positive()
        .min(1, { message: "Role ID must be a positive integer." })
    )
    .nonempty({ message: "Atleast one role needed" }),
});

export { userSchema, rolesAndPermissionsSchema, userRolesSchema };
