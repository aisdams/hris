import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { themes } from '@/registry/themes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useConfig } from '@/hooks/use-config';
import { FormProvider } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { MdArrowForwardIos } from 'react-icons/md';
import { Checkbox } from '@/components/ui/checkbox';
import React, { ChangeEvent, useState } from 'react';
import AvatarImage from '../../public/img/ghost.jpg';
import { CopyButton } from '@/components/copy-button';
import InputPassword from '@/components/inputs/input-password';

export default function Settings() {
  const [config] = useConfig();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config.theme);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

      <div className="mt-10">
        <h1 className="font-bold text-2xl">Setting Your Account</h1>
      </div>
      <div className="grid md:grid-cols-2 w-full h-full mt-10 gap-5">
        <div className="">
          <div className="">
            <div className="flex items-center gap-5">
              <div className="">
                {selectedImage ? (
                  <Image src={selectedImage} alt="" className="rounded-full w-24 h-24" />
                ) : (
                  <Image src={AvatarImage} alt="" className="rounded-full w-24 h-24" />
                )}
              </div>
              {/* <Image src={AvatarImage} alt="" className="rounded-full w-24 h-24" /> */}
              <div className="">
                <h1 className="text-2xl font-bold">Tatang</h1>
                <p className="text-gray-50/70 font-light">Direktur Utama</p>
                <Input type="file" onChange={handleImageChange} className="mt-5" />
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold my-5">Change Logo web</h1>
            <div className="grid gap-3">
              <div>
                <Label>Choose Logo :</Label>
                <Input type="file" className="" />
              </div>
              <div>
                <Label>Type new title web :</Label>
                <Input name="title" placeholder="Type new title web" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-5">Reset Password :</h1>
          <div>
            <Label htmlFor="password">New Password : </Label>
            <Input name="password" type="password" placeholder="Enter new password" className="mt-2" />
          </div>

          <div className="mt-6">
            <Label htmlFor="confirm password">Confirm Password : </Label>
            <Input name="password" placeholder="confirm new password" type="password" className="mt-2" />
          </div>
          <Button
            className="text-white px-5 mt-3 rounded-md"
            style={
              {
                backgroundColor: 'var(--theme-primary)',
                '--theme-primary': `hsl(${config?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
              } as React.CSSProperties
            }
          >
            Save
          </Button>
        </div>
      </div>

      <div className="my-20">
        <h1 className="text-2xl font-semibold mb-5">Role Settings</h1>
        <div className="grid md:grid-cols-2">
          <div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Dashboard
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role2" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Report
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role3" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Staff
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role4" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role4"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Employee
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role5" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role5"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Payroll
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role6" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role6"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Timesheet
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role7" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role7"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Perfomance
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role8" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role8"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Finance
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role9" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role9"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Training
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role10" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role10"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Company Policy
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role11" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role11"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Messenger
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role12" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role12"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Landing Page
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role13" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role13"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  System Setting
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role14" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role14"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  HR Admin Setup
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role15" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role15"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Recruitment
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role16" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role16"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Contracts
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role17" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role17"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Ticket
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role18" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role18"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Event
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role19" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role19"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Meeting
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role20" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role20"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Zoom Meeting
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role21" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role22"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Assets
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role23" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role23"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Document
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role24" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role24"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Templates
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role25" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role25"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Notification Templates
                </label>
              </div>
            </div>
            <div className="items-center flex space-x-2 mb-3">
              <Checkbox id="role26" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="role26"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  HRM System Setup
                </label>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="text-white px-5 mt-3 rounded-md"
          style={
            {
              backgroundColor: 'var(--theme-primary)',
              '--theme-primary': `hsl(${config?.cssVars[mode === 'dark' ? 'dark' : 'light'].primary})`,
            } as React.CSSProperties
          }
        >
          Save
        </Button>
      </div>
    </div>
  );
}
