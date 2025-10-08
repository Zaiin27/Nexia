import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const MiningPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Mining, Natural Resources & Renewable Energy" }
    ];

    const paragraphs = [
        "The mining, natural resources & renewable energy sectors are at the forefront of meeting global demands for essential materials and energy, while navigating increasing pressures around sustainability, environmental responsibility and social accountability.",
        "From exploration and extraction to processing and utilisation, these industries play a pivotal role in supporting economic development and technological advancement, even as they face complex regulatory and operational challenges.",
        "Our team of experienced professionals provides tailored guidance to help businesses thrive in this evolving landscape. Leveraging deep sector expertise, we focus on enhancing operational efficiencies, addressing sustainability concerns and delivering solutions that create value for both our clients and their stakeholders. Whether managing regulatory compliance, optimising resource utilisation, or integrating renewable energy strategies, we are dedicated to helping you meet the demands of today while preparing for the opportunities of tomorrow."
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
