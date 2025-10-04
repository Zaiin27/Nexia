import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const GlobalInsightsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Global Insights" }
    ];

    const paragraphs = [
        "Stay ahead of global market trends and regulatory changes with our comprehensive analysis and insights from our worldwide network of professionals.",
        "Our global insights provide strategic perspectives on economic developments, regulatory updates, and emerging opportunities across different markets and jurisdictions.",
        "Leverage our international expertise to make informed decisions and capitalize on global market opportunities while navigating complex cross-border challenges."
    ];

    const featuredContent = [
        {
            title: "Market Trends Analysis",
            description: "Quarterly analysis of global market trends and their impact on business strategies across different sectors.",
            image: "/api/placeholder/400/200",
            link: "/insights/global/market-trends"
        },
        {
            title: "Regulatory Updates",
            description: "Stay informed about the latest regulatory changes affecting international business operations and compliance requirements.",
            image: "/api/placeholder/400/200",
            link: "/insights/global/regulatory"
        },
        {
            title: "Economic Outlook",
            description: "Expert analysis of global economic conditions and their implications for business planning and investment decisions.",
            image: "/api/placeholder/400/200",
            link: "/insights/global/economic"
        }
    ];

    return (
        <InsightsPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
        />
    );
};

export default GlobalInsightsPage;
