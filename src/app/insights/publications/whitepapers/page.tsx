import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const WhitepapersPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Publications", href: "/insights/publications" },
        { label: "White Papers" }
    ];

    const paragraphs = [
        "Access our comprehensive collection of white papers that provide in-depth analysis and practical guidance on complex business and regulatory topics.",
        "Our white papers are authored by subject matter experts and offer detailed insights into emerging trends, regulatory changes, and best practices across various industries and service areas.",
        "From technical guidance on compliance requirements to strategic insights on market opportunities, our white papers serve as valuable resources for business leaders and professionals seeking to stay informed and make informed decisions."
    ];

    const featuredContent = [
        {
            title: "ESG Reporting: A Comprehensive Guide",
            description: "Complete guide to Environmental, Social, and Governance reporting requirements and best practices for implementation.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Digital Transformation in Professional Services",
            description: "Strategic framework for implementing digital transformation initiatives in professional services organizations.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "International Tax Planning Strategies",
            description: "Advanced strategies for optimizing international tax structures while maintaining compliance with evolving regulations.",
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
                name: "Dr. Lisa Chen",
                title: "Research Director",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default WhitepapersPage;
