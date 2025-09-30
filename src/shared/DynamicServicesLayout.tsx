'use client';
import { usePathname } from 'next/navigation';
import ServicesHeader from "@/shared/ServicesHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServicesSidebar from "@/shared/ServicesSidebar";
import RelatedInsights from "@/shared/RelatedInsights";
import ServicesCards from "@/shared/ServicesCards";
import BackToTop from "@/shared/BackToTop";
import { relatedInsightsData } from "@/data/relatedInsights";
import { servicesDataSidebar, servicesCardsData } from "@/utils/constants";



const getServiceNameFromPath = (pathname: string) => {
  // Redirect /services to /services/audit as default
 
  
  // Find the service and its category
  let serviceName = "";
  let categoryName = "";
  
  for (const serviceCategory of servicesDataSidebar) {
    const foundItem = serviceCategory.items.find(item => 
      item.href === pathname
    );
    if (foundItem) {
      serviceName = foundItem.name;
      categoryName = serviceCategory.name;
      break;
    }
  }
  
  return {
    title: serviceName || "Service",
    subtitle: categoryName || "Service"
  };
};

// Function to get breadcrumbs from path
const getBreadcrumbsFromPath = (pathname: string) => {
  if (pathname === '/services') {
    return [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Audit" }
    ];
  }
  
  const pathParts = pathname.split('/');
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" }
  ];
  
  // Find the category
  const servicePath = pathParts[pathParts.length - 1];
  let category = "";
  
  for (const serviceCategory of servicesDataSidebar) {
    const foundItem = serviceCategory.items.find(item => 
      item.href === pathname
    );
    if (foundItem) {
      category = serviceCategory.name;
      break;
    }
  }
  
  if (category) {
    breadcrumbs.push({ label: category, href: `/services/${category.toLowerCase().replace(' ', '-')}` });
  }
  
  // Add the service name
  const serviceName = servicePath
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  breadcrumbs.push({ label: serviceName, href: pathname });
  
  return breadcrumbs;
};

interface DynamicServicesLayoutProps {
  children: React.ReactNode;
}

export default function DynamicServicesLayout({ children }: DynamicServicesLayoutProps) {
  const pathname = usePathname();
  
  const { title, subtitle } = getServiceNameFromPath(pathname);
  const breadcrumbs = getBreadcrumbsFromPath(pathname);
  
  const backgroundImage = pathname === '/services/audit/financial-statements-audit' 
    ? 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg'
    : pathname === '/services/audit/esg-assurance'
    ? 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg'
    : pathname === '/services/tax/corporate-tax'
    ? 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg'
    : pathname === '/services/tax/global-mobility-tax-services'
    ? 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg'
    : pathname === '/services/tax/indirect-taxes'
    ? 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg'
    : undefined;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesHeader 
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />
      
      <Breadcrumbs 
        items={breadcrumbs}
      />
      
      <div className="flex min-h-screen">
        {/* Sidebar - Hidden on small screens */}
        <div className="hidden lg:block bg-white">
          <ServicesSidebar 
            categories={servicesDataSidebar}
          />
        </div>
        
        <div className="flex-1 bg-white pt-5">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
      
      {/* Get page-specific services data */}
      {(() => {
        const pageKey = pathname.split('/').pop();
        const pageData = pageKey ? servicesCardsData[pageKey as keyof typeof servicesCardsData] : null;
        
        if (pageData) {
          return (
            <>
              <div className="w-full border-b border-gray-200 bg-gray-100"></div>
              <RelatedInsights insights={relatedInsightsData} />
              <ServicesCards 
                services={[...pageData.services]} 
                heading={pageData.heading}
              />
              <BackToTop />
            </>
          );
        }
        return null;
      })()}
    </div>
  );
}
