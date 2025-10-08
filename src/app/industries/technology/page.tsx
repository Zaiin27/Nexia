import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const TechnologyPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Technology" }
    ];

    const paragraphs = [
        "The technology industry serves as a driving force behind innovation, enabling transformation across all sectors of the economy. With rapid advancements in areas like artificial intelligence, cloud computing, connectivity, clean energy and mobility, technology providers face growing demands to deliver cutting-edge solutions.",
        "At Nexia, we understand the fast-paced and innovative environment in which technology companies operate. Our comprehensive range of services is designed to support your growth and help you stay ahead in a rapidly evolving market. From navigating complex regulatory landscapes to optimizing operations and unlocking market potential, we partner with you to harness opportunities, overcome challenges, and establish your business as a leader in this transformative industry."
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
