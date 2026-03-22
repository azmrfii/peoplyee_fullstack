import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "Tokopedia",
        location: "Jakarta",
        salaryRange: "8jt - 15jt",
        description: "Develop modern web UI using React and Next.js",
        tags: ["react", "nextjs", "tailwind"],
      },
      {
        title: "Backend Engineer",
        company: "Gojek",
        location: "Jakarta",
        salaryRange: "10jt - 20jt",
        description: "Build scalable REST APIs using Node.js",
        tags: ["nodejs", "express", "postgres"],
      },
      {
        title: "Fullstack Developer",
        company: "Traveloka",
        location: "Bandung",
        salaryRange: "9jt - 18jt",
        description: "Work across frontend and backend systems",
        tags: ["react", "nodejs", "prisma", "laravel"],
      },
      {
        title: "Software Engineer",
        company: "Shopee",
        location: "Singapore",
        salaryRange: "15jt - 30jt",
        description: "Design and develop scalable systems",
        tags: ["golang", "microservices"],
      },
      {
        title: "UI/UX Designer",
        company: "Bukalapak",
        location: "Jakarta",
        salaryRange: "7jt - 12jt",
        description: "Design user-friendly interfaces",
        tags: ["figma", "design"],
      },
      {
        title: "Mobile Developer",
        company: "Traveloka",
        location: "Singapore",
        salaryRange: "20jt - 32jt",
        description: "Build native apps for iOS and Android",
        tags: ["flutter", "react-native", "firebase"],
      },
    ],
  });

  console.log("✅ Seed data inserted");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });