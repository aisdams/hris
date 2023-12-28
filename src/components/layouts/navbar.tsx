'use client';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import { ThemeWrapper } from '../theme-wrapper';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPencilAlt, FaBell } from 'react-icons/fa';
import Logo from '../../../public/img/logo-hexa.svg';
import LogoAvatar from '../../../public/img/ghost.jpg';
import { Customizer, ThemeCustomizer } from '@/components/theme-customizer';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemesTabs } from '../tabs';
import { Input } from '../ui/input';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="!fixed grid grid-cols-[1fr_1fr_2fr] py-3 justify-between px-10 h-max !w-full bg-white 
    z-10 dark:bg-[#020817]"
    >
      <div className="flex justify-between items-center pr-16">
        <Image src={Logo} alt="" className="dark:brightness-0 dark:invert-[1]" />
        <div className="">
          <RiMenu5Fill className="w-6 h-6" onClick={toggleSidebar} />
        </div>
      </div>

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger className="flex items-center gap-3 bg-gray-200 dark:bg-[#8b8b8b] rounded-full px-3 py-2 text-sm">
            <FaPencilAlt />
            Customize
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Customizer</SheetTitle>
              <SheetDescription>Customize Your Overview Page layout</SheetDescription>
              <div className="customize">
                <ThemeWrapper
                  defaultTheme="zinc"
                  className="relative flex flex-col items-start md:flex-row md:items-center"
                >
                  <div className="px-4 pb-8 md:ml-auto md:pb-0">
                    <ThemeCustomizer />
                  </div>
                </ThemeWrapper>
                <div className="relative flex gap-4 ">
                  <ThemesTabs />
                  <Customizer className="hidden md:flex" />
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-end mx-0 items-center gap-10">
        <Popover>
          <PopoverTrigger>
            <MdEmail />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <div className="text-center bg-gray-800/40 rounded-sm py-1">
                <h1>Messages</h1>
              </div>
              <div className="mt-5 gap-3 grid">
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <FaBell />
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <div className="text-center bg-gray-800/40 rounded-sm py-1">
                <h1>Notification</h1>
              </div>
              <div className="mt-5 gap-3 grid">
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Image src={LogoAvatar} alt="" className="rounded-full w-12 h-12" />
                  <div className="grid">
                    <div className="flex justify-between items-center gap-3">
                      <h1>App Developer</h1>
                      <h1 className="text-green-500 text-xs">2 hrs ago</h1>
                    </div>
                    <p className="font-light text-xs">Lorem ipsum dolor sit..</p>
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
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
};

export default Navbar;
