import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from './navbar';
import sideBarData from '@/data/sidebarData'
import { IoIosArrowDown } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuClick = (index: any) => {
      setActiveSubMenu(activeSubMenu === index ? null : index);
    };
  
    return (
        <ScrollArea className="fixed w-[27rem] !h-screen pt-8 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] !overflow-hidden ">

<div>
       {sideBarData.map((sidebar, idx) => (
          <div key={idx} className='grid pl-5'>
            <ul>
              <li>
                {sidebar.sub ? (
                  <div className="flex justify-between pr-10"
                  onClick={() => handleSubMenuClick(idx)}>
                    <button
                    className='flex gap-5 mb-3 w-full text-left'
                  >
                    <span>{React.createElement(sidebar.icon, { size: 18 })}</span>
                    {sidebar.title} 
                  </button>
                  <IoIosArrowDown className="" />
                  </div>
                ) : (
                  <Link href={sidebar.link} className='flex gap-5 mb-3 w-full text-left'>
                    <span>{React.createElement(sidebar.icon, { size: 18 })}</span>
                    {sidebar.title}
                  </Link>
                )}
              {sidebar.sub && activeSubMenu === idx && (
                <ul className="mb-3">
                    {sidebar.sub.map((subItem, subIdx) => (
                    <li key={subIdx}>
                        {subItem.link ? (
                        <Link href={subItem.link} className='flex gap-5 ml-5 items-center'>
                            <span>{React.createElement(subItem.icon, { size: 10 })}</span>
                            {subItem.title}
                        </Link>
                        ) : (
                        <span className='flex gap-5 ml-5 items-center'>
                            <span>{React.createElement(subItem.icon, { size: 10 })}</span>
                            {subItem.title}
                        </span>
                        )}
                    </li>
                    ))}
                </ul>
                )}
              </li>
            </ul>
          </div>
        ))}
       </div>
        </ScrollArea>
    );
  }