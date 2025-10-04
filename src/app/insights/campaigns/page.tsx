import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const CampaignsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Campaigns" }
    ];

    const paragraphs = [
        "Explore our thought leadership campaigns that address key industry challenges and provide strategic insights for business leaders and decision-makers.",
        "Our campaigns combine research, expert analysis, and practical guidance to help organizations navigate complex business environments and capitalize on emerging opportunities.",
        "From industry-specific initiatives to cross-sector campaigns, our thought leadership efforts provide valuable insights and strategic perspectives on the most pressing business challenges of today."
    ];

    const featuredContent = [
        {
            title: "Future of Work Campaign",
            description: "Exploring how remote work, automation, and digital transformation are reshaping the professional services industry.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Sustainability in Business",
            description: "Comprehensive campaign on integrating environmental and social responsibility into business strategy and operations.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Digital Innovation Series",
            description: "Multi-part series examining how digital technologies are transforming traditional business models and creating new opportunities.",
            image: "/api/placeholder/400/200",
            link: "#"
        }
    ];

    return (
        <InsightsPageTemplate
            breadcrumbs={breadcrumbs}
            paragraphs={paragraphs}
            featuredContent={featuredContent}
            author={{
                name: "David Park",
                title: "Head of Thought Leadership",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default CampaignsPage;
