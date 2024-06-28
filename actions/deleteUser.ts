"use server";

import prisma from "@/lib/db";

export const deleteprisma = async (id: string) => {
  await prisma.task.delete({
    where: { id: id },
  });
};