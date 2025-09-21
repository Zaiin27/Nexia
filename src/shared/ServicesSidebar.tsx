'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ServiceItem {
  name: string;
  href: string;
}

interface ServiceCategory {
  name: string;
  items: ServiceItem[];
}

interface ServicesSidebarProps {
  categories: ServiceCategory[];
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ categories }) => {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => {
      // If the category is already open, close it
      if (prev.has(categoryName)) {
        return new Set();
      } else {
        // Close all others and open only this one
        return new Set([categoryName]);
      }
    });
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="space-y-1">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header with Dropdown Arrow */}
              <button
                onClick={() => toggleCategory(category.name)}
                className={`w-full flex items-center justify-between py-3 px-3 rounded-md transition-colors ${
                  openCategories.has(category.name) 
                    ? 'bg-gray-100' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <h3 className="text-base font-semibold text-gray-900 text-left">
                  {category.name}
                </h3>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openCategories.has(category.name) 
                      ? 'text-teal-600 rotate-180' 
                      : 'text-gray-600'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Category Items with Animation */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories.has(category.name) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-4 mt-1 space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className={`block py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-teal-600 font-medium'
                          : 'text-gray-900 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSidebar;
