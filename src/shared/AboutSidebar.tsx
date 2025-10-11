'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AboutItem {
  name: string;
  href: string;
}

interface AboutSidebarProps {
  items: AboutItem[];
}

const AboutSidebar: React.FC<AboutSidebarProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <div className="space-y-1">
          <div>
            <div className="space-y-1">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`block py-3 px-3 rounded-md transition-colors text-base font-medium ${
                    pathname === item.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-900 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;
