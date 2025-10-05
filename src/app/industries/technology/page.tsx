import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const TechnologyPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Technology" }
    ];

    const paragraphs = [
        "Our technology industry expertise helps innovative companies navigate the complex landscape of digital transformation, intellectual property, and rapid growth.",
        "We work with startups, scale-ups, and established technology companies to provide specialized accounting, tax, and advisory services. Our team understands the unique challenges of the tech sector, including R&D tax credits, stock option accounting, and international expansion.",
        "From software development and AI companies to fintech and cybersecurity firms, our technology specialists deliver solutions that support innovation, growth, and compliance in the fast-paced technology ecosystem."
    ];

    const featuredContent = [
        {
            title: "R&D Tax Credits",
            description: "Maximize R&D tax credits and incentives for technology companies, helping reduce tax burden while supporting innovation.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/tax/corporate-tax"
        },
        {
            title: "Stock Option Accounting",
            description: "Complex equity compensation accounting and tax planning for technology companies with employee stock programs.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/business-services/financial-reporting"
        },
        {
            title: "International Expansion",
            description: "Global mobility and international tax planning services for technology companies expanding across borders.",
            image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/07/new-york-united-states-of-america-1024x672.jpg",
            link: "/services/tax/global-mobility-tax-services"
        }
    ];

    return (
        <IndustryPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "Technology Industry Team",
                title: "Technology Specialists",
                company: "Nexia International",
                image: "/api/placeholder/96/96"
            }}
        />
    );
};

export default TechnologyPage;
