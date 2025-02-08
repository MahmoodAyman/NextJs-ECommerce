import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const priceFormat = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

/* Schema for inserting products  */
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 Characters"),
  slug: z.string().min(3, "Slug must be at least 3 Characters"),
  category: z.string().min(3, "Cateogry must be at least 3 Characters"),
  brand: z.string().min(3, "Brand must be at least 3 Characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "product msust have at least one image"),
  isFeatures: z.boolean(),
  banner: z.string().nullable(),
  price: priceFormat,
});

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must at least 6 characters"),
});

// Schma for signing up users

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().min(3, "Email must be at least 3 characters"),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPasswod: z.string().min(3, "Password must be at least 3 characters"),
  })
  .refine((data) => data.password === data.confirmPasswod, {
    message: "Passwords doesn't match",
    path: ["confirmPassword"],
  });
