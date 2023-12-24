import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';
import Footer from '@/components/layouts/footer';
import Sidebar from '@/components/layouts/sidebar';
import Navbar from '@/components/layouts/navbar';
import styles from '@/styles/layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="!h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <div className={`w-1/5 ${styles.sidebarContainer} ${isSidebarVisible ? '' : styles.hidden}`}>
          <Sidebar />
        </div>
        <div className={`w-4/5 p-4 ${styles.childrenContainer} ${isSidebarVisible ? '' : styles.childrenAnimHidden}`}>
          <div className={`pl-10 pt-14 justify-start pr-8 ml-2 w-full ${styles.childrenAnim}`}>{children}</div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
