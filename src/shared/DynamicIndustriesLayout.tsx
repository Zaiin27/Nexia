'use client';
import { usePathname } from 'next/navigation';
import IndustryHeader from "@/shared/IndustryHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedInsights from "@/shared/RelatedInsights";
import BackToTop from "@/shared/BackToTop";
import { relatedInsightsData } from "@/data/relatedInsights";
import { industriesData, industriesMobileData } from "@/utils/constants";

const getIndustryNameFromPath = (pathname: string) => {
    // Find the industry and its category
    let industryName = "";
    let categoryName = "";

    // Check main industries data first
    const mainIndustry = industriesData.find(item => item.href === pathname);
    if (mainIndustry) {
        industryName = mainIndustry.label;
        categoryName = "Industry";
        return {
            title: industryName,
            subtitle: categoryName
        };
    }

    // Check mobile industries data for sub-categories
    for (const industryCategory of industriesMobileData) {
        const foundItem = industryCategory.items.find(item =>
            item.href === pathname
        );
        if (foundItem) {
            industryName = foundItem.label;
            categoryName = industryCategory.title;
            break;
        }
    }

    return {
        title: industryName || "Industry",
        subtitle: categoryName || "Industries"
    };
};

// Function to get breadcrumbs from path
const getBreadcrumbsFromPath = (pathname: string) => {
    if (pathname === '/industries') {
        return [
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: "Overview" }
        ];
    }

    const pathParts = pathname.split('/');
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" }
    ];

    // Find the category
    let category = "";
    let industryName = "";

    // Check main industries data first
    const mainIndustry = industriesData.find(item => item.href === pathname);
    if (mainIndustry) {
        category = "Industry";
        industryName = mainIndustry.label;
    } else {
        // Check mobile industries data for sub-categories
        for (const industryCategory of industriesMobileData) {
            const foundItem = industryCategory.items.find(item =>
                item.href === pathname
            );
            if (foundItem) {
                category = industryCategory.title;
                industryName = foundItem.label;
                break;
            }
        }
    }

    if (category && category !== "Industry") {
        breadcrumbs.push({ label: category, href: `/industries/${category.toLowerCase().replace(' ', '-')}` });
    }

    // Add the industry name
    breadcrumbs.push({ label: industryName, href: pathname });

    return breadcrumbs;
};

// Function to get background image for industries
const getIndustriesBackgroundImage = (pathname: string) => {
    const industryImages: { [key: string]: string } = {
        '/industries/construction': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg',
        '/industries/financial-service': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg',
        '/industries/manufacturing': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/12/Mining-Trucks-1024x540.jpg',
        '/industries/mining': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg',
        '/industries/real-estate': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg',
        '/industries/retail': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg',
        '/industries/technology': 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg'
    };

    return industryImages[pathname] || null;
};

interface DynamicIndustriesLayoutProps {
    children: React.ReactNode;
}

export default function DynamicIndustriesLayout({ children }: DynamicIndustriesLayoutProps) {
    const pathname = usePathname();

    const { title, subtitle } = getIndustryNameFromPath(pathname);
    const breadcrumbs = getBreadcrumbsFromPath(pathname);

    const backgroundImage = getIndustriesBackgroundImage(pathname) || undefined;

    return (
        <div className="min-h-screen bg-gray-50">
            <IndustryHeader
                title={title}
                subtitle={subtitle}
                backgroundImage={backgroundImage}
            />

            <Breadcrumbs
                items={breadcrumbs}
            />

            <div className="bg-white pt-5">
                <div className="p-8">
                    {children}
                </div>
            </div>

            {/* Related Insights Section */}
            <div className="w-full border-b border-gray-200 bg-gray-100"></div>
            <RelatedInsights insights={relatedInsightsData} />
            <BackToTop />
        </div>
    );
}
