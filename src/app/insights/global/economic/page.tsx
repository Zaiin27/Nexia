import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const EconomicPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Global Insights", href: "/insights/global" },
        { label: "Economic Outlook" }
    ];

    const paragraphs = [
        "Gain strategic insights into global economic conditions and their implications for business planning, investment decisions, and market opportunities across different regions and industries.",
        "Our economic outlook analysis combines macroeconomic trends, sector-specific developments, and regional economic indicators to provide comprehensive insights for business strategy and decision-making.",
        "Navigate economic uncertainty with confidence using our expert analysis of global economic trends, inflation patterns, currency fluctuations, and their impact on business operations and growth strategies."
    ];

    const featuredContent = [
        {
            title: "Global Economic Recovery Analysis",
            description: "Assessment of post-pandemic economic recovery patterns and their implications for business growth strategies.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Inflation and Interest Rate Trends",
            description: "Analysis of global inflation patterns and central bank policies affecting business investment and financing decisions.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Emerging Market Opportunities",
            description: "Identification of growth opportunities in emerging markets and strategies for successful market entry and expansion.",
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
                name: "Dr. Maria Santos",
                title: "Chief Economist",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default EconomicPage;
