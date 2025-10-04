'use client';
import { usePathname } from 'next/navigation';
import InsightsHeader from "@/shared/InsightsHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import InsightsSidebar from "@/shared/InsightsSidebar";
import RelatedInsights from "@/shared/RelatedInsights";
import BackToTop from "@/shared/BackToTop";
import { relatedInsightsData } from "@/data/relatedInsights";
import { insightsData, insightsMobileData } from "@/utils/constants";
import { getInsightsBackgroundImage } from "@/utils/backgroundHeaders";

const getInsightNameFromPath = (pathname: string) => {
    // Find the insight and its category
    let insightName = "";
    let categoryName = "";

    // Check main insights data first
    const mainInsight = insightsData.find(item => item.href === pathname);
    if (mainInsight) {
        insightName = mainInsight.label;
        categoryName = "Insights";
        return {
            title: insightName,
            subtitle: categoryName
        };
    }

    // Check mobile insights data for sub-categories
    for (const insightCategory of insightsMobileData) {
        const foundItem = insightCategory.items.find(item =>
            item.href === pathname
        );
        if (foundItem) {
            insightName = foundItem.label;
            categoryName = insightCategory.title;
            break;
        }
    }

    return {
        title: insightName || "Insight",
        subtitle: categoryName || "Insights"
    };
};

// Function to get breadcrumbs from path
const getBreadcrumbsFromPath = (pathname: string) => {
    if (pathname === '/insights') {
        return [
            { label: "Home", href: "/" },
            { label: "Insights", href: "/insights" },
            { label: "Case Studies" }
        ];
    }

    const pathParts = pathname.split('/');
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" }
    ];

    // Find the category
    let category = "";
    let insightName = "";

    // Check main insights data first
    const mainInsight = insightsData.find(item => item.href === pathname);
    if (mainInsight) {
        category = "Insights";
        insightName = mainInsight.label;
    } else {
        // Check mobile insights data for sub-categories
        for (const insightCategory of insightsMobileData) {
            const foundItem = insightCategory.items.find(item =>
                item.href === pathname
            );
            if (foundItem) {
                category = insightCategory.title;
                insightName = foundItem.label;
                break;
            }
        }
    }

    if (category && category !== "Insights") {
        breadcrumbs.push({ label: category, href: `/insights/${category.toLowerCase().replace(' ', '-')}` });
    }

    // Add the insight name
    breadcrumbs.push({ label: insightName, href: pathname });

    return breadcrumbs;
};

interface DynamicInsightsLayoutProps {
    children: React.ReactNode;
}

export default function DynamicInsightsLayout({ children }: DynamicInsightsLayoutProps) {
    const pathname = usePathname();

    const { title, subtitle } = getInsightNameFromPath(pathname);
    const breadcrumbs = getBreadcrumbsFromPath(pathname);

    const backgroundImage = getInsightsBackgroundImage(pathname);

    return (
        <div className="min-h-screen bg-gray-50">
            <InsightsHeader
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
                    <InsightsSidebar
                        categories={insightsMobileData}
                    />
                </div>

                <div className="flex-1 bg-white pt-5">
                    <div className="p-8">
                        {children}
                    </div>
                </div>
            </div>

            {/* Related Insights Section */}
            <div className="w-full border-b border-gray-200 bg-gray-100"></div>
            <RelatedInsights insights={relatedInsightsData} />
            <BackToTop />
        </div>
    );
}
