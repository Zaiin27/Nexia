import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const IndustriesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Overview" }
    ];

    const paragraphs = [
        "Discover our comprehensive industry expertise and specialized services designed to meet the unique challenges and opportunities across diverse sectors.",
        "Our industry-focused approach ensures that we understand the specific regulatory, operational, and strategic needs of each sector we serve.",
        "From construction and manufacturing to financial services and technology, our global network of professionals delivers tailored solutions that drive success and growth for businesses worldwide."
    ];

    const featuredContent = [
        {
            title: "Construction Industry Solutions",
            description: "Specialized accounting and advisory services for construction companies, from project management to compliance.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/industries/construction"
        },
        {
            title: "Financial Services Expertise",
            description: "Comprehensive audit, tax, and advisory services tailored for financial institutions and investment firms.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Manufacturing-1024x576.jpg",
            link: "/industries/financial-service"
        },
        {
            title: "Technology Sector Solutions",
            description: "Innovative services for tech companies, including R&D tax credits, IP valuations, and digital transformation advisory.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/industries/technology"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Industry Leadership Team",
                title: "Industry Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default IndustriesPage;
