import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const RetailPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Retail" }
    ];

    const paragraphs = [
        "The retail industry is undergoing a transformative evolution, driven by the rise of online selling, omnichannel strategies and advanced automation. As the boundaries between physical and digital retail continue to blur, consumer expectations are reaching new heights.",
        "This industry’s dynamic nature not only fuels economic growth but also demands that businesses stay agile, adaptive and innovative to remain competitive in a rapidly shifting landscape.",
        "At Nexia, we specialise in equipping retail businesses with the expertise and strategies needed to thrive in this ever-changing environment. From navigating complex market conditions and capitalising on emerging consumer trends to ensuring compliance with regulatory requirements, our team delivers tailored solutions that support your success. With a proactive and flexible approach, we help you harness the opportunities of a fast-paced industry while securing a strong foundation for sustainable growth."
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
