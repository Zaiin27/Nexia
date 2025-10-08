import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const ManufacturingPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Manufacturing" }
    ];

    const paragraphs = [
        "The manufacturing industry is navigating a rapidly evolving landscape characterised by global supply chain disruptions, rising production costs and increasing regulatory demands. Professional accountants and advisory professionals are integral to the success of manufacturing businesses.",
        "Nexia’s members provide tailored financial solutions to the manufacturing industry, addressing its unique complexities. These services include cost accounting, inventory management, financial reporting and tax compliance to optimise operational efficiency. By leveraging deep industry knowledge, we assist manufacturers in analysing production costs, managing raw material and finished goods inventories and streamlining financial operations to ensure regulatory adherence.",
        "In addition, Nexia’s member firms support strategic decision-making through advisory services, including budgeting, forecasting and financial modelling. We assist in navigating challenges such as supply chain disruptions, capital investments and international tax regulations."
    ];

    const featuredContent = [
        {
            title: "Cost Accounting Systems",
            description: "Advanced cost accounting and management systems for manufacturing operations, including job costing and activity-based costing.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/12/Mining-Trucks-1024x540.jpg",
            link: "/services/business-services/accounting-bookkeeping"
        },
        {
            title: "Inventory Management",
            description: "Comprehensive inventory accounting and management solutions to optimize working capital and reduce carrying costs.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/12/Mining-Trucks-1024x540.jpg",
            link: "/services/business-services/financial-reporting"
        },
        {
            title: "ESG Compliance",
            description: "Environmental, Social, and Governance reporting and compliance services for sustainable manufacturing practices.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/12/Mining-Trucks-1024x540.jpg",
            link: "/services/audit/esg-assurance"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            
        />
    );
};

export default ManufacturingPage;
