import { prisma } from "../lib/prisma.js";

export const JobService = {
  findAll: ({ search, location, page }: any) => {
    return prisma.job.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  { title: { 
                    contains: search,
                    mode: "insensitive",
                  } },
                  { description: { 
                    contains: search, 
                    mode: "insensitive",
                   } },
                ],
              }
            : {},
          location ? { location } : {},
        ],
      },
      skip: (page - 1) * 10,
      take: 10,
    });
  },

  findById: (id: string) =>
    prisma.job.findUnique({ where: { id } }),
};