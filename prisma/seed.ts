import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { siteReviews } from "../seed/site-review.seed";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Purger Database
  await prisma.siteReview.deleteMany();

  // Insert Data Seed
  await prisma.siteReview.createMany({
    data: siteReviews,
  });

  // const alice = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "Hello World", published: true },
  //     },
  //   },
  // });
  console.log(`Databases Seeded Successful`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
