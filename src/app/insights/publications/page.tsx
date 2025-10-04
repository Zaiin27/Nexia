import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const PublicationsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Publications" }
    ];

    const paragraphs = [
        "Access our comprehensive library of publications, including white papers, industry reports, and newsletters that provide deep insights into key business and regulatory topics.",
        "Our publications are authored by subject matter experts and provide practical guidance on complex issues facing businesses today.",
        "From technical guidance on regulatory compliance to strategic insights on market opportunities, our publications serve as valuable resources for business leaders and professionals."
    ];

    const featuredContent = [
        {
            title: "White Papers",
            description: "In-depth analysis and guidance on complex business and regulatory topics authored by our experts.",
            image: "/api/placeholder/400/200",
            link: "/insights/publications/whitepapers"
        },
        {
            title: "Industry Reports",
            description: "Comprehensive reports on industry trends, market analysis, and sector-specific insights.",
            image: "/api/placeholder/400/200",
            link: "/insights/publications/reports"
        },
        {
            title: "Newsletters",
            description: "Regular updates on regulatory changes, market developments, and industry news.",
            image: "/api/placeholder/400/200",
            link: "/insights/publications/newsletters"
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

export default PublicationsPage;
