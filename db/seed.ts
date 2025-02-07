import { PrismaClient } from "@prisma/client";

import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.Account.deleteMany();
  await prisma.Session.deleteMany();
  await prisma.Verification.deleteMany();
  await prisma.User.deleteMany();

  await prisma.User.createMany({ data: sampleData.users });
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Data base seeded successfully");
}

main();
