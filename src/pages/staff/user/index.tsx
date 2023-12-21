import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { FaUserPlus, FaPlus } from 'react-icons/fa';
import LionImage from '../../../../public/img/lion.jpg';
import ImageAv from '../../../../public/img/image.jpg';
import FamilyImage from '../../../../public/img/family.jpg';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { MdArrowForwardIos, MdDownload } from 'react-icons/md';

export default function User() {
  const users = [
    {
      position: 'Hr',
      image: LionImage,
      name: 'hr',
      email: 'hr@example.com',
    },
    {
      position: 'Accountant',
      image: FamilyImage,
      name: 'Timon Leonard',
      email: 'felo@mailinator.com',
    },
    {
      position: 'Manager',
      image: ImageAv,
      name: 'Brenden Jordan',
      email: 'zocaj@mailinator.com',
    },
    {
      position: 'Accountant',
      image: FamilyImage,
      name: 'Ali Brown',
      email: 'dinyny@mailinator.com',
    },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full justify-between pt-10 items-center relative">
        <div className="grid">
          <h1 className="font-semibold mb-3 text-xl">Manage Users</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <MdArrowForwardIos className="text-xs" />
            <h1>Manage Users</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="bg-purple-500 text-white px-2 w-9 h-9 rounded-md">
            <FaUserPlus />
          </Button>
          <Button className="bg-purple-500 text-white px-2 w-9 h-9 rounded-md">
            <FaPlus />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-20">
        {users.map((user, idx) => (
          <div key={idx} className="">
            <div className="flex justify-between">
              <div className="bg-purple-500 px-3 text-white h-max">{user.position}</div>
            </div>
            <Image
              src={user.image}
              alt=""
              className="w-14 h-14 my-10 text-center grid mx-auto justify-center rounded-full"
            />
            <div className="grid text-center">
              <h1 className="text-purple-500">{user.name}</h1>
              <h1>{user.email}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-4 ">
        <div>
          <div className="flex justify-between">
            <div className="bg-purple-500 px-3 text-white h-max">Accountant</div>
          </div>
          <Image
            src={LionImage}
            alt=""
            className="w-14 h-14 my-10 text-center grid mx-auto justify-center rounded-full"
          />
          <div className="grid text-center">
            <h1 className="text-purple-500">Ali Brown</h1>
            <h1>dinyny@mailinator.com</h1>
          </div>
        </div>
        <div className="grid">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="bg-purple-500 h-10 w-10 text-white mx-auto grid justify-center rounded-lg">
                  <FaUserPlus className="text-xl mt-2" />
                </div>
                <h1 className="pt-5">New User</h1>
                <p>Click to add new user</p>
              </TooltipTrigger>
              <TooltipContent>
                <p className="bg-black px-8 text-white py-1 rounded-md">Create</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
