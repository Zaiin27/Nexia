import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const CaseStudiesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies" }
    ];

    const paragraphs = [
        "Our case studies showcase real-world examples of how we've helped clients overcome complex challenges and achieve their business objectives.",
        "Each case study provides detailed insights into our approach, methodologies, and the tangible results delivered for our clients across various industries and service areas.",
        "These success stories demonstrate our commitment to excellence and our ability to deliver innovative solutions that drive measurable business value."
    ];

    const featuredContent = [
        {
            title: "Financial Services Transformation",
            description: "How we helped a major bank streamline their compliance processes and reduce operational costs by 30%.",
            image: "/api/placeholder/400/200",
            link: "/insights/case-studies/financial"
        },
        {
            title: "Technology Sector Growth",
            description: "Supporting a tech startup through rapid expansion and international market entry strategies.",
            image: "/api/placeholder/400/200",
            link: "/insights/case-studies/technology"
        },
        {
            title: "Healthcare Industry Compliance",
            description: "Navigating complex regulatory requirements for a healthcare provider's digital transformation initiative.",
            image: "/api/placeholder/400/200",
            link: "/insights/case-studies/healthcare"
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

export default CaseStudiesPage;
