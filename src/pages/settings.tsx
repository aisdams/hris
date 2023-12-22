import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AvatarImage from '../../public/img/ghost.jpg';
import { Button } from '@/components/ui/button';
import { MdArrowForwardIos } from 'react-icons/md';
import { Input } from '@/components/ui/input';

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
      <div className="grid grid-cols-2">
        <div className="grid">
          <div className="relative">
            <Image src={AvatarImage} alt="" className="rounded-full w-20 h-20" />
            <Input type="file" />
          </div>
          <ul>
            <li>Edit Profile</li>
            <li>Account Settings</li>
            <li>Change Password</li>
            <li>Social Profile</li>
            <li>Notification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
