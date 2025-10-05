import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const ManufacturingPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Manufacturing" }
    ];

    const paragraphs = [
        "Our manufacturing industry expertise encompasses the full spectrum of services needed to support modern manufacturing operations, from cost accounting to supply chain optimization.",
        "We understand the unique challenges facing manufacturers, including inventory management, production cost control, regulatory compliance, and global supply chain complexities. Our specialized services help manufacturers maintain profitability while meeting quality and environmental standards.",
        "From automotive and aerospace to food production and consumer goods, our manufacturing specialists provide tailored solutions including cost accounting, tax planning, and operational advisory services that drive efficiency and growth."
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
            author={{
                name: "Manufacturing Industry Team",
                title: "Manufacturing Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default ManufacturingPage;
