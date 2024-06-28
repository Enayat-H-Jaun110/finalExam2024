"use client"
import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaRegHeart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { MyForm } from '@/components/myForm/myForm';
import { Button } from '@/components/ui/button';
import { deleteprisma } from '@/actions/deleteUser';
import { getPrisma } from '@/actions/getUser';
import prisma from '@/lib/db';
const HomePage = () => {
  const [userInfo, setuserInfo] = useState<any>();

  useEffect(() => {
    getPrisma().then((data: any) => {
      setuserInfo(data);
      console.log(data);
    });
  }, [userInfo]);

  const handleDelete = useCallback((id: string) => {
    deleteprisma(id);
  }, []);
  return (
    <main className='flex flex-col gap-y-4 justify-center bg-gradient-to-r from-indigo-200 to-yellow-100 h-screen '>
      <div className=" grid grid-rows justify-center  grid-flow-col gap-12 mt-8">
  <div className="bg-blue-400 bg-border row-span-3 h-[100px] w-[150px] flex flex-col justify-center items-center text-2xl...">Total Task<span className='text-2xl font-bold '><br />04</span></div>
  <div className="bg-green-300 bg-border row-span-3 h-[100px] w-[150px] flex flex-col justify-center items-center ...">Completed<span className='text-2xl font-bold'><br />04</span></div>
  <div className="bg-red-200 bg-border row-span-3 h-[100px] w-[150px] flex flex-col justify-center items-center ...">Pending<span className='text-2xl font-bold'><br />04</span></div>
</div>
    
      <MyForm />
    

   <div className='flex flex-col justify-center items-center gap-y-6 '> {
      userInfo?.map((task:any, id:number) => {
        return(<Card key={userInfo.id}>
          <CardHeader className='w-[500px]' >
            <div className='flex gap-x-4'><CardTitle>{userInfo.text}</CardTitle>
            <Button variant={'link'} size={'sm'}  ><FaRegHeart />Mark as Complete</Button>
            <Button ></Button>
            </div>
            <Button
                  variant={"ghost"}
                  className="w-fit"
                  
                >
                  <span>
                  <MdOutlineDelete />
                  </span>
                </Button>
          </CardHeader>
          
          
        </Card>);
      })
    };
    </div>
    </main>
  )
}

export default HomePage