import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const RetailPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Retail" }
    ];

    const paragraphs = [
        "Our retail industry expertise helps businesses navigate the evolving landscape of consumer commerce, from traditional brick-and-mortar operations to e-commerce and omnichannel retailing.",
        "We understand the unique challenges facing retailers, including inventory management, seasonal fluctuations, digital transformation, and changing consumer behaviors. Our specialized services help retail businesses optimize operations, manage costs, and drive growth.",
        "From fashion and electronics to food and specialty retail, our retail specialists provide comprehensive solutions including inventory accounting, tax planning, and digital transformation advisory that support success in the competitive retail marketplace."
    ];

    const featuredContent = [
        {
            title: "Inventory Management",
            description: "Advanced inventory accounting and management systems for retail operations, including seasonal inventory planning and markdown optimization.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/business-services/accounting-bookkeeping"
        },
        {
            title: "Digital Transformation",
            description: "Strategic advisory services for retail digital transformation, including e-commerce integration and omnichannel operations.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/advisory/transaction-services"
        },
        {
            title: "Tax Planning for Retail",
            description: "Specialized tax planning including sales tax compliance, international expansion, and seasonal business tax optimization.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/tax/indirect-taxes"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Retail Industry Team",
                title: "Retail Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default RetailPage;
