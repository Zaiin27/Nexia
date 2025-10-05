import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const FinancialServicePage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Financial Services" }
    ];

    const paragraphs = [
        "Our financial services expertise encompasses a comprehensive range of specialized services tailored to meet the complex regulatory and operational needs of financial institutions.",
        "We work with banks, investment firms, insurance companies, and other financial services providers to deliver audit, tax, and advisory services that ensure compliance while optimizing performance. Our deep understanding of financial regulations and market dynamics enables us to provide strategic guidance that drives growth.",
        "From regulatory compliance and risk management to digital transformation and ESG reporting, our financial services specialists help institutions navigate the evolving landscape of the financial industry with confidence and strategic insight."
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
