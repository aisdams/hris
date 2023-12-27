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
    <div className="h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {isSidebarVisible && (
          <div
            className={`!h-screen bg-white dark:bg-[#020817] ${styles.sidebarContainer} ${
              isSidebarVisible ? '' : styles.hidden
            }`}
          >
            <Sidebar />
          </div>
        )}
        <div
          className={`w-[78%] ${styles.childrenContainer} ${isSidebarVisible ? '' : styles.childrenAnimHidden} ${
            isSidebarVisible ? 'ml-1/5' : ''
          } p-4`}
        >
          <div className={`!mt-10 ml-5 ${styles.childrenAnim}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
