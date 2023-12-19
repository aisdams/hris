import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { useSession } from 'next-auth/react';

import { cn } from '@/lib/utils';
import Footer from '@/components/layouts/footer';
import Sidebar from '@/components/layouts/sidebar';
import Navbar from '@/components/layouts/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="!h-screen !overflow-hidden">
        <Navbar />
        <div className="flex">
        <Sidebar />
        <div className='pl-10 ml-2 pt-5 bg-[#f4f5f7]'>
            {children}
        </div>
        </div>
    </div>
  );
};

export default Layout;
