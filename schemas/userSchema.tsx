import { z } from "zod";

export const formSchema = z.object({
    text: z.string().min(10,{message:"The text must contain 10 characters"}).max(50),
  })