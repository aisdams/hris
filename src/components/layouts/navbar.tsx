import React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MdEmail } from 'react-icons/md';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPencilAlt, FaBell } from 'react-icons/fa';
import Logo from '../../../public/img/logo-hexa.svg';
import LogoAvatar from '../../../public/img/ghost.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <div className="!fixed grid grid-cols-[1fr_1fr_2fr] py-3 justify-between px-10 h-max !w-full bg-white z-10">
      <div className="flex justify-between items-center pr-16">
        <Image src={Logo} alt="" />
        <div className="">
          <RiMenu5Fill className="w-6 h-6" />
        </div>
      </div>

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 bg-gray-200 rounded-full px-3 text-sm">
            <FaPencilAlt />
            Customize
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Customizer</SheetTitle>
              <SheetDescription>Customize Your Overview Page layout</SheetDescription>
              <h1 className="font-semibold">Layouts Type</h1>
              <div className="flex gap-3">
                <Button>LTR</Button>
                <Button>RTL</Button>
              </div>
              <h1 className="font-semibold">Sidebar Type</h1>
              <div className="flex gap-3">
                <Button>Light</Button>
                <Button>Dark</Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-end mx-0 items-center gap-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MdEmail />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaBell />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoMdSettings />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex gap-3">
          <Image src={LogoAvatar} alt="" className="w-9 h-9 rounded-full" width={36} height={36} />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-3">
              Jajang
              <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
