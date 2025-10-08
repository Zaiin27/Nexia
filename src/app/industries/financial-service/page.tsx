import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const FinancialServicePage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Financial Services" }
    ];

    const paragraphs = [
        "In the fast-paced and highly regulated financial services industry, our professionals provide indispensable support to firms navigating complex financial landscapes.",
        "Nexia member expertise spans financial reporting, compliance and audit services, ensuring that clients meet stringent regulatory standards while maintaining operational efficiency. By offering tailored solutions for areas such as risk management, tax strategy and capital optimisation, we enable financial institutions to strengthen their financial health and enhance stakeholder confidence.",
        "Through advisory services, we provide insights into market trends, assist with mergers and acquisitions and support the adoption of advanced technologies like blockchain and AI. Nexia members also deliver expertise in implementing financial systems that streamline processes and enhance data-driven decision-making."
    ];

    const featuredContent = [
        {
            title: "Financial Statements Audit",
            description: "Comprehensive audit services for financial institutions, ensuring compliance with international accounting standards and regulatory requirements.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg",
            link: "/services/audit/financial-statements-audit"
        },
        {
            title: "Risk Advisory Services",
            description: "Advanced risk assessment and management strategies to help financial institutions identify, measure, and mitigate operational and financial risks.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg",
            link: "/services/advisory/risk-advisory"
        },
        {
            title: "Tax Compliance for Financial Services",
            description: "Specialized tax services including transfer pricing, cross-border transactions, and regulatory tax compliance for financial institutions.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg",
            link: "/services/tax/corporate-tax"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Financial Services Team",
                title: "Financial Services Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default FinancialServicePage;
