"use server";

import prisma from "@/lib/db";

export const getPrisma = async () => {
  return await prisma.task.findMany();
};