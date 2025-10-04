import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const FinancialCaseStudiesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies", href: "/insights/case-studies" },
        { label: "Financial Services" }
    ];

    const paragraphs = [
        "Explore our successful engagements in the financial services sector, showcasing how we've helped banks, insurance companies, and other financial institutions navigate complex regulatory requirements and achieve operational excellence.",
        "Our financial services case studies demonstrate our deep understanding of the sector's unique challenges, including regulatory compliance, risk management, digital transformation, and operational efficiency improvements.",
        "From helping traditional banks modernize their systems to supporting fintech startups with compliance and growth strategies, our expertise spans the entire financial services ecosystem."
    ];

    const featuredContent = [
        {
            title: "Digital Banking Transformation",
            description: "How we helped a regional bank implement a comprehensive digital transformation strategy, resulting in 40% improvement in customer satisfaction.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Regulatory Compliance Overhaul",
            description: "Supporting a major insurance company in overhauling their compliance framework to meet new international standards.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Fintech Startup Growth",
            description: "Guiding a fintech startup through rapid expansion while maintaining regulatory compliance across multiple jurisdictions.",
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
                name: "Michael Chen",
                title: "Financial Services Practice Leader",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default FinancialCaseStudiesPage;
