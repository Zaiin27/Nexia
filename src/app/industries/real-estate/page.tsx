import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const RealEstatePage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Real Estate" }
    ];

    const paragraphs = [
        "Our real estate industry expertise spans the entire property lifecycle, from development and acquisition through management and disposition.",
        "We work with real estate developers, property management companies, REITs, and real estate investment firms to provide specialized accounting, tax, and advisory services. Our deep understanding of real estate transactions and regulations enables us to deliver solutions that optimize returns and ensure compliance.",
        "From residential and commercial development to industrial and hospitality properties, our real estate specialists provide comprehensive services including transaction advisory, tax planning, and regulatory compliance that support success in the dynamic real estate market."
    ];

    const featuredContent = [
        {
            title: "Real Estate Transaction Services",
            description: "Comprehensive due diligence and transaction advisory services for real estate acquisitions and dispositions.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/advisory/transaction-services"
        },
        {
            title: "Property Tax Planning",
            description: "Strategic tax planning for real estate investments including depreciation optimization and 1031 exchanges.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/tax/corporate-tax"
        },
        {
            title: "REIT Compliance",
            description: "Specialized accounting and compliance services for Real Estate Investment Trusts and property funds.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/Construction-site-1024x682.jpg",
            link: "/services/business-services/financial-reporting"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Real Estate Industry Team",
                title: "Real Estate Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default RealEstatePage;
