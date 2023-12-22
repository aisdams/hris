import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar';
import sideBarData from '@/data/sidebarData';
import { IoIosArrowDown } from 'react-icons/io';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Sidebar() {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [active, setActive] = useState(false);

  const handleSubMenuClick = (index: any) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <ScrollArea className="relative w-full pt-14 bg-white !h-screen shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      {sideBarData.map((sidebar, idx) => (
        <div key={idx} className="grid pl-5">
          <ul>
            <li>
              {sidebar.sub ? (
                <div className="flex justify-between pr-10" onClick={() => handleSubMenuClick(idx)}>
                  <button className="flex gap-5 mb-3 w-full text-left">
                    <span>{React.createElement(sidebar.icon, { size: 18 })}</span>
                    {sidebar.title}
                  </button>
                  <IoIosArrowDown className="" />
                </div>
              ) : (
                <Link href={sidebar.link} className="flex gap-5 mb-3 w-full text-left">
                  <span>{React.createElement(sidebar.icon, { size: 18 })}</span>
                  {sidebar.title}
                </Link>
              )}
              {sidebar.sub && activeSubMenu === idx && (
                <ul className="mb-3">
                  {sidebar.sub.map((subItem, subIdx) => (
                    <div key={subIdx}>
                      <li>
                        {subItem.link ? (
                          <Link href={subItem.link} className="flex gap-5 ml-5 items-center">
                            {subItem.title}
                          </Link>
                        ) : (
                          <span className="flex gap-5 ml-5 items-center" onClick={() => handleSubMenuClick(idx)}>
                            {subItem.title}
                            <IoIosArrowDown className="" />
                          </span>
                        )}

                        {subItem.submenu?.map((children, idc) => (
                          <li key={idc}>
                            {children.link ? (
                              <Link href={children.link} className="flex gap-5 ml-10 mt-1 items-center">
                                {children.title}
                              </Link>
                            ) : (
                              <span className="flex gap-5 ml-5 items-center">{children.title}</span>
                            )}
                          </li>
                        ))}
                      </li>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      ))}
    </ScrollArea>
  );
}
