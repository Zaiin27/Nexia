'use client';
import { usePathname } from 'next/navigation';
import AboutHeader from "@/shared/AboutHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSidebar from "@/shared/AboutSidebar";
import BackToTop from "@/shared/BackToTop";

// About pages data
const aboutPagesData = [
  { name: "History", href: "/about/history" },
  { name: "Nexia Leadership", href: "/about/leadership" },
  { name: "Purpose and Mission", href: "/about/purpose-mission" },
  { name: "Commitments", href: "/about/commitments" },
  { name: "Strategic Alliance", href: "/about/strategic-alliance" },
  { name: "Become a member", href: "/about/become-member" }
];

const getAboutPageNameFromPath = (pathname: string) => {
  // Find the about page
  const aboutPage = aboutPagesData.find(item => item.href === pathname);
  
  if (aboutPage) {
    return {
      title: aboutPage.name,
      subtitle: "About"
    };
  }
  
  return {
    title: "About Nexia",
    subtitle: "About"
  };
};

// Function to get breadcrumbs from path
const getBreadcrumbsFromPath = (pathname: string) => {
  if (pathname === '/about') {
    return [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" }
    ];
  }
  
  const pathParts = pathname.split('/');
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }
  ];
  
  // Add the page name
  const aboutPage = aboutPagesData.find(item => item.href === pathname);
  if (aboutPage) {
    breadcrumbs.push({ label: aboutPage.name, href: pathname });
  }
  
  return breadcrumbs;
};


interface DynamicAboutLayoutProps {
  children: React.ReactNode;
}

export default function DynamicAboutLayout({ children }: DynamicAboutLayoutProps) {
  const pathname = usePathname();
  
  const { title, subtitle } = getAboutPageNameFromPath(pathname);
  const breadcrumbs = getBreadcrumbsFromPath(pathname);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHeader 
        title={title}
        subtitle={subtitle}
      />
      
      <Breadcrumbs 
        items={breadcrumbs}
      />
      
      <div className="flex min-h-screen">
        {/* Sidebar - Hidden on small screens */}
        <div className="hidden lg:block bg-white">
          <AboutSidebar 
            items={aboutPagesData}
          />
        </div>
        
        <div className="flex-1 bg-white pt-5">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  );
}
