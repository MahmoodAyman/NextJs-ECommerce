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
