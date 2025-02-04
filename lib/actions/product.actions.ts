"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

/* Get latest products */
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  console.log(convertToPlainObj(data));
  return convertToPlainObj(data);
}

/* Get Products by slug */

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

