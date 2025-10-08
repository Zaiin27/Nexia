import React from 'react';
import IndustryPageTemplate from "@/templates/IndustryPageTemplate";

const RealEstatePage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Real Estate" }
    ];

    const paragraphs = [
        "The real estate industry operates within a constantly shifting landscape shaped by regulatory reforms, societal trends and environmental challenges. These dynamics require businesses to adopt forward-thinking approaches, ensuring their investments align with current demands while anticipating future opportunities.",
        "Nexia’s professional service advisors play a critical role in this journey, offering deep industry expertise and insights that empower organizations to navigate complexities, mitigate risks, and capitalize on emerging trends effectively.",
        "Nexia’s global real estate advisors provide unparalleled guidance and innovative solutions tailored to the multifaceted needs of the real estate industry. From navigating regulatory requirements to leveraging advanced technical strategies, we deliver comprehensive, results-driven support designed to optimise your investment decisions. With a commitment to excellence and a forward-looking perspective, we help our clients stay ahead in a competitive and evolving market."
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
