import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center space-x-1 text-sm">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link href={item.href} className="text-black hover:text-gray-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-gray-500">»</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
