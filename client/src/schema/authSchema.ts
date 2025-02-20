import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" })
    .regex(/^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, {
      message: "Password contains invalid characters",
    }),
});

export type AuthSchemaType = z.infer<typeof authSchema>;