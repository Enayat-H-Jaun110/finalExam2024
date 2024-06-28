"use server"

import prisma from "@/lib/db";
import { formSchema } from "@/schemas/userSchema"
import { z } from "zod";

export const createUser=async(values: z.infer<typeof formSchema>) => {
    const validatedValues = formSchema.safeParse(values);
    if(!validatedValues.success)
        {
            return{error:"Invalid Values"}
        }

        

        await prisma.task.create({
            data:{
                text: validatedValues.data?.text
                
            }
        });
}