import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const RegulatoryPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Global Insights", href: "/insights/global" },
        { label: "Regulatory Updates" }
    ];

    const paragraphs = [
        "Stay ahead of regulatory changes that impact international business operations with our comprehensive analysis of new laws, regulations, and compliance requirements across different jurisdictions.",
        "Our regulatory updates provide timely insights into changes that affect cross-border transactions, tax compliance, data protection, and industry-specific regulations that impact your business operations.",
        "Navigate complex regulatory landscapes with confidence using our expert analysis and practical guidance on compliance requirements and implementation strategies."
    ];

    const featuredContent = [
        {
            title: "International Tax Law Changes 2024",
            description: "Comprehensive overview of recent changes to international tax regulations and their impact on multinational businesses.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Data Protection Regulations Update",
            description: "Latest developments in data protection laws across different jurisdictions and their implications for business operations.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "ESG Reporting Requirements",
            description: "New environmental, social, and governance reporting requirements and their impact on corporate compliance strategies.",
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
                name: "Robert Kim",
                title: "Regulatory Affairs Director",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default RegulatoryPage;
