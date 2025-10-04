import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const MarketTrendsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Global Insights", href: "/insights/global" },
        { label: "Market Trends" }
    ];

    const paragraphs = [
        "Stay informed about the latest global market trends and their implications for business strategy and investment decisions across different industries and regions.",
        "Our market trends analysis provides comprehensive insights into economic developments, consumer behavior changes, technological disruptions, and emerging opportunities that shape the global business landscape.",
        "Leverage our international network's expertise to understand how global trends impact local markets and identify strategic opportunities for growth and expansion."
    ];

    const featuredContent = [
        {
            title: "Q4 2024 Global Economic Outlook",
            description: "Analysis of global economic conditions and their impact on business investment and growth strategies.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Digital Transformation Trends",
            description: "How digital transformation is reshaping industries and creating new opportunities for businesses worldwide.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Sustainability and ESG Trends",
            description: "Growing importance of environmental, social, and governance factors in business decision-making and investment strategies.",
            image: "/api/placeholder/400/200",
            link: "#"
        }
    ];

    return (
        <InsightsPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Dr. Emma Thompson",
                title: "Global Market Analyst",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default MarketTrendsPage;
