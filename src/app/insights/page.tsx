import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const InsightsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies" }
    ];

    const paragraphs = [
        "Discover our comprehensive collection of insights, case studies, and thought leadership content that showcases our expertise across various industries and service areas.",
        "Our insights provide valuable perspectives on market trends, regulatory changes, and best practices that can help your business navigate complex challenges and seize new opportunities.",
        "From detailed case studies highlighting successful client engagements to global insights on emerging market trends, our content library offers actionable intelligence for business leaders and decision-makers."
    ];

    const featuredContent = [
        {
            title: "Digital Transformation in Financial Services",
            description: "Explore how traditional financial institutions are adapting to digital disruption and implementing innovative solutions.",
            image: "/api/placeholder/400/200",
            link: "/insights/case-studies/financial"
        },
        {
            title: "ESG Reporting: A Global Perspective",
            description: "Understanding the evolving landscape of Environmental, Social, and Governance reporting requirements worldwide.",
            image: "/api/placeholder/400/200",
            link: "/insights/global/regulatory"
        },
        {
            title: "Tax Technology Trends 2024",
            description: "Latest developments in tax technology and how they're reshaping compliance and advisory services.",
            image: "/api/placeholder/400/200",
            link: "/insights/publications/whitepapers"
        }
    ];

    return (
        <InsightsPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Sarah Johnson",
                title: "Head of Insights",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default InsightsPage;
