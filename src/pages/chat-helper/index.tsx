import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FaPlus } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { themes } from '@/registry/themes';
import { useConfig } from '@/hooks/use-config';
import AvatarImage from '/public/img/ghost.jpg';
import { Button } from '@/components/ui/button';
import { MdArrowForwardIos } from 'react-icons/md';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

export default function ChatHelper() {
  const [config] = useConfig();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config.theme);
  return (
    <div className="w-full mb-10">
      <div className="flex w-full justify-between pt-10 items-center relative">
        <div className="grid">
          <h1 className="font-semibold mb-3 text-xl">Chat Helper</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Dashboard</Link>
            <MdArrowForwardIos className="text-xs" />
            <h1>Chat Helper</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            className="px-2 w-9 h-9 rounded-md"
            style={
              {
                backgroundColor: 'var(--theme-primary)',
                '--theme-primary': `hsl(${config?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
              } as React.CSSProperties
            }
          >
            <HiOutlineDocumentPlus />
          </Button>
          <Button
            className="px-2 w-9 h-9 rounded-md"
            style={
              {
                backgroundColor: 'var(--theme-primary)',
                '--theme-primary': `hsl(${config?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
              } as React.CSSProperties
            }
          >
            <FaPlus />
          </Button>
        </div>
      </div>

      <div className="flex mt-10 gap-5 w-full">
        <div className="card border border-white p-3 rounded-md w-[40%]">
          <h1 className="mb-8">Daftar Helper :</h1>
          <div className="flex items-center gap-5 border border-white p-2 rounded-sm">
            <Image src={AvatarImage} alt="" className="w-12 h-12 rounded-full" />
            <div className="grid">
              <h1>Name: Adrian</h1>
              <p className="text-gray-500/80 text-sm">IT Helpdesk</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 border border-white p-2 rounded-sm">
            <Image src={AvatarImage} alt="" className="w-12 h-12 rounded-full" />
            <div className="grid">
              <h1>Name: Adrian</h1>
              <p className="text-gray-500/80 text-sm">IT Helpdesk</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 border border-white p-2 rounded-sm">
            <Image src={AvatarImage} alt="" className="w-12 h-12 rounded-full" />
            <div className="grid">
              <h1>Name: Adrian</h1>
              <p className="text-gray-500/80 text-sm">IT Helpdesk</p>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5 border border-white p-2 rounded-sm">
            <Image src={AvatarImage} alt="" className="w-12 h-12 rounded-full" />
            <div className="grid">
              <h1>Name: Adrian</h1>
              <p className="text-gray-500/80 text-sm">IT Helpdesk</p>
            </div>
          </div>
        </div>

        <div className="card border border-white p-3 rounded-md relative !w-full h-32">
          <h1>Chat Room:</h1>

          <Button
            className="absolute bottom-0 right-0 mb-4 mr-4 items-center flex gap-2"
            style={
              {
                backgroundColor: 'var(--theme-primary)',
                '--theme-primary': `hsl(${config?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
              } as React.CSSProperties
            }
          >
            Send <IoMdSend />
          </Button>
        </div>
      </div>
    </div>
  );
}
