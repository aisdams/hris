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
    <div className="!h-screen">
      <Navbar />
      <div className="flex">
        <div className="w-1/5 bg-gray-200">
          <Sidebar />
        </div>
        <div className="w-4/5 p-4">
          <div className="pl-10 pt-14 justify-start pr-8 ml-2 w-full">{children}</div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
