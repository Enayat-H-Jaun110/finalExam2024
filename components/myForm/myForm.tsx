"use client"
 
import { formSchema } from "@/schemas/userSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IoAddOutline } from "react-icons/io5";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { createUser } from "@/actions/createUser"

export const MyForm = () => {
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    createUser(values);
  }
  return (
    <main className="flex justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField 
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" font-bold">Text</FormLabel>
              <FormControl>
                <Input placeholder="Enter Task Here ..." {...field} className="w-[500px]" />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <Button type="submit">Add Task <IoAddOutline size={'lg'}/></Button>
        
      </form>
    </Form>
    </main>
  )
}
