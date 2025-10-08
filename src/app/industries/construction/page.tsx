import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const ConstructionPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Construction" }
    ];

    const paragraphs = [
        "The construction industry is currently navigating a dynamic and challenging environment. Professional accountants and advisory professionals play a vital role in empowering construction businesses to thrive in any economic landscape.",
        "Nexia’ members deliver specialised financial services to the construction industry, addressing its unique challenges such as project-based accounting, complex contract management and fluctuating cash flows. Our expertise includes cost accounting, job costing and compliance with revenue recognition standards. By providing accurate financial reporting and ensuring adherence to tax regulations, we help construction firms maintain financial stability and mitigate risks throughout project lifecycles.",
        "Our advisory services include strategic planning, operational efficiency, budgeting, forecasting, financial modelling, and expertise in construction-specific technologies to optimize resource allocation, monitor performance, and enhance profitability. We work closely with construction firms to implement best practices and innovative solutions that drive sustainable growth."
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
