import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const ConstructionPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Construction" }
    ];

    const paragraphs = [
        "Our construction industry expertise spans the entire project lifecycle, from initial planning and financing through project completion and ongoing operations.",
        "We understand the unique challenges facing construction companies, including complex project accounting, compliance requirements, and cash flow management. Our specialized services help construction firms maintain profitability while meeting regulatory standards.",
        "Our global network of construction industry specialists provides tailored solutions including project cost accounting, contract compliance, tax planning, and risk management strategies that are essential for success in today's competitive construction market."
    ];

    const featuredContent = [
        {
            title: "Project Cost Accounting",
            description: "Specialized accounting services for construction projects including job costing, progress billing, and project profitability analysis.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/business-services/accounting-bookkeeping"
        },
        {
            title: "Contract Compliance",
            description: "Ensure compliance with construction contracts, government regulations, and industry standards across all project phases.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/advisory/risk-advisory"
        },
        {
            title: "Tax Planning for Construction",
            description: "Strategic tax planning including R&D credits, equipment depreciation, and multi-state tax compliance for construction companies.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/tax/corporate-tax"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Construction Industry Team",
                title: "Construction Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default ConstructionPage;
