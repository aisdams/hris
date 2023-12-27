import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar';
import sideBarData from '@/data/sidebarData';
import { IoIosArrowDown } from 'react-icons/io';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Sidebar() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleSubMenuClickT = (idx: any) => {
    setShowSubMenu(!showSubMenu);
  };

  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [active, setActive] = useState(false);

  const handleSubMenuClick = (index: any) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <ScrollArea className="!fixed w-[22%] !h-screen mt-20 shadow-lg">
      {sideBarData.map((sidebar, idx) => (
        <div key={idx} className="grid pl-5 bg-[#020817]">
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
                          <span className="flex gap-5 ml-5 items-center" onClick={() => handleSubMenuClickT(idx)}>
                            {subItem.title}
                            <IoIosArrowDown className="" />
                          </span>
                        )}

                        {subItem.submenu && showSubMenu && (
                          <ul>
                            {subItem.submenu.map((children, idc) => (
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
                          </ul>
                        )}
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
