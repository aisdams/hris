import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { MdArrowForwardIos, MdDownload } from 'react-icons/md';

export default function Deposit() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between pt-10 items-center relative">
        <div className="grid">
          <h1 className="font-semibold mb-3 text-xl">Manage Deposit</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Dashboard</Link>
            <MdArrowForwardIos className="text-xs" />
            <h1>Manage Deposit</h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Button className="bg-purple-500 text-white px-2 w-9 h-9 rounded-md">
            <MdDownload />
          </Button>
          <Button className="bg-purple-500 text-white px-2 w-9 h-9 rounded-md">
            <HiOutlineDocumentPlus />
          </Button>
        </div>
      </div>
    </div>
  );
}
