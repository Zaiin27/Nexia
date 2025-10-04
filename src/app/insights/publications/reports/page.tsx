import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const ReportsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Publications", href: "/insights/publications" },
        { label: "Industry Reports" }
    ];

    const paragraphs = [
        "Explore our comprehensive industry reports that provide detailed analysis of market trends, sector-specific insights, and strategic recommendations for business growth and development.",
        "Our industry reports combine market research, expert analysis, and practical insights to help business leaders understand sector dynamics and identify opportunities for growth and competitive advantage.",
        "From annual industry outlooks to specialized sector analysis, our reports provide valuable intelligence for strategic planning and investment decision-making across various industries and markets."
    ];

    const featuredContent = [
        {
            title: "Professional Services Industry Outlook 2024",
            description: "Comprehensive analysis of trends and opportunities in the global professional services sector.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Technology Sector Growth Analysis",
            description: "In-depth examination of growth patterns and investment opportunities in the technology sector.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Healthcare Industry Transformation Report",
            description: "Analysis of digital transformation trends and regulatory changes in the healthcare industry.",
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
                name: "Mark Thompson",
                title: "Industry Research Lead",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default ReportsPage;
