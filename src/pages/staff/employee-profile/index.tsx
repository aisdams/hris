import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import LionImage from '../../../../public/img/lion.jpg';
import ImageAv from '../../../../public/img/image.jpg';
import FamilyImage from '../../../../public/img/family.jpg';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { MdArrowForwardIos, MdDownload } from 'react-icons/md';
import { FaChevronDown, FaRegTrashAlt, FaSearch, FaFilter } from 'react-icons/fa';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';

export default function EmployeeProfile() {
  const [openMenu, isOpenMenu] = useState(false);

  const employeeProfile = [
    {
      image: LionImage,
      title: 'Julie Lynn',
      position: 'Manager',
      kode: 'EMP000001',
    },
    {
      image: ImageAv,
      title: 'Lunea Todd',
      position: 'CEO',
      kode: 'EMP000002',
    },
    {
      image: FamilyImage,
      title: 'Ida F. Mullen',
      position: 'Telecom Specialist',
      kode: 'EMP000003',
    },
    {
      image: LionImage,
      title: 'Teresa R McRae',
      position: 'Finance Manager',
      kode: 'EMP000004',
    },
    {
      image: LionImage,
      title: 'Joel O Dolan',
      position: 'Chartered',
      kode: 'EMP000001',
    },
    {
      image: ImageAv,
      title: 'Lunea Todd',
      position: 'CEO',
      kode: 'EMP000002',
    },
    {
      image: FamilyImage,
      title: 'Ida F. Mullen',
      position: 'Telecom Specialist',
      kode: 'EMP000003',
    },
    {
      image: LionImage,
      title: 'Teresa R McRae',
      position: 'Finance Manager',
      kode: 'EMP000004',
    },
    {
      image: LionImage,
      title: 'Teresa R McRae',
      position: 'Finance Manager',
      kode: 'EMP000004',
    },
  ];
  return (
    <div className="w-full">
      <div className="flex w-full justify-between pt-10 items-center relative">
        <div className="grid">
          <h1 className="font-semibold mb-3 text-xl">Employee Profile</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <MdArrowForwardIos className="text-xs" />
            <h1>Employee Profile</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="bg-purple-500 text-white px-2 w-9 h-9 rounded-md">
            <FaFilter />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 my-10 mx-auto justify-center items-center gap-5">
        <div className="grid">
          <h1 className="text-sm mb-2">Branch</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex px-3 w-full border border-gray-500 bg-transparent hover:bg-transparent text-left font-normal justify-between rounded-md h-10 items-center pt-1">
              All <FaChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>China</DropdownMenuItem>
              <DropdownMenuItem>India</DropdownMenuItem>
              <DropdownMenuItem>Canada</DropdownMenuItem>
              <DropdownMenuItem>Greece</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid">
          <h1 className="text-sm mb-2">Department</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex px-3 w-full border border-gray-500 bg-transparent hover:bg-transparent text-left text-sm font-normal justify-between rounded-md h-10 items-center pt-1">
              Select Department <FaChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Industrials</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>China</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid">
          <h1 className="text-sm mb-2">Designation</h1>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex px-3 w-full border border-gray-500 bg-transparent hover:bg-transparent text-left text-sm font-normal justify-between rounded-md h-10 items-center pt-1">
              Select Designation <FaChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Designation </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-2 pt-7">
          <Button className="bg-purple-500 text-xs px-2 w-9 h-9 text-white rounded-md p-3 mx-0 text-center">
            <FaSearch />
          </Button>
          <Button className="bg-red-500 text-xs px-2 w-9 h-9 text-white rounded-md p-3 mx-0 text-center">
            <FaRegTrashAlt />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 ">
        {employeeProfile.map((employe, idx) => (
          <div key={idx} className="my-auto grid items-center text-center">
            <Image
              src={employe.image}
              alt=""
              className="w-14 h-14 my-10 text-center grid mx-auto justify-center rounded-full"
            />
            <h1 className="text-green-500">{employe.title}</h1>
            <p>{employe.position}</p>
            <Button className="bg-purple-500">{employe.kode}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
