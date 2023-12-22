import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

export default function Settings() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between pt-10 items-center relative">
        <div className="grid">
          <h1 className="font-semibold mb-3 text-xl">Settings</h1>
          <div className="flex items-center gap-3">
            <Link href="/">Dashboard</Link>
            <MdArrowForwardIos className="text-xs" />
            <h1>Settings</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
