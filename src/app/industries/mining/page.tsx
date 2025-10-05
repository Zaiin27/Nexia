import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const MiningPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Mining, Natural Resources & Renewable Energy" }
    ];

    const paragraphs = [
        "Our expertise in mining, natural resources, and renewable energy sectors provides comprehensive solutions for companies operating in these capital-intensive and highly regulated industries.",
        "We understand the complex challenges of resource extraction, environmental compliance, and the transition to renewable energy. Our specialized services help companies navigate regulatory requirements while optimizing operations and managing risk.",
        "From traditional mining operations to renewable energy projects, our specialists deliver tailored accounting, tax, and advisory services that support sustainable growth and operational excellence in these critical sectors."
    ];

    const featuredContent = [
        {
            title: "Resource Valuation",
            description: "Specialized valuation services for mineral reserves, renewable energy assets, and natural resource investments.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/advisory/transaction-services"
        },
        {
            title: "Environmental Compliance",
            description: "Comprehensive environmental reporting and compliance services for mining and renewable energy operations.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/audit/esg-assurance"
        },
        {
            title: "Capital Project Accounting",
            description: "Specialized accounting for large-scale capital projects in mining and renewable energy development.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/business-services/financial-reporting"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Mining & Natural Resources Team",
                title: "Natural Resources Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default MiningPage;
