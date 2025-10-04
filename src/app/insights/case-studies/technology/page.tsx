import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const TechnologyCaseStudiesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies", href: "/insights/case-studies" },
        { label: "Technology Sector" }
    ];

    const paragraphs = [
        "Discover how we've supported technology companies through various stages of growth, from startup phase to international expansion, addressing unique challenges in the tech sector.",
        "Our technology sector case studies highlight our expertise in areas such as intellectual property management, international tax planning, regulatory compliance, and strategic business advisory for tech companies.",
        "From software development companies to hardware manufacturers, we understand the specific needs of technology businesses and provide tailored solutions that support their growth and success."
    ];

    const featuredContent = [
        {
            title: "SaaS Company International Expansion",
            description: "Supporting a software-as-a-service company in expanding to European markets while optimizing their tax structure.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "AI Startup Funding Strategy",
            description: "Helping an AI startup secure Series A funding and establish proper corporate governance structures.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Hardware Manufacturing Optimization",
            description: "Streamlining operations and supply chain management for a hardware manufacturer entering new markets.",
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
                name: "Dr. Sarah Williams",
                title: "Technology Sector Specialist",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default TechnologyCaseStudiesPage;
