import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const NewslettersPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Publications", href: "/insights/publications" },
        { label: "Newsletters" }
    ];

    const paragraphs = [
        "Stay informed with our regular newsletters that provide timely updates on regulatory changes, market developments, and industry news that impact your business operations.",
        "Our newsletters deliver concise, actionable insights on the latest developments in tax law, regulatory changes, market trends, and industry best practices to help you stay ahead of the curve.",
        "Subscribe to our newsletters to receive regular updates on topics relevant to your industry and business needs, ensuring you never miss important developments that could impact your operations."
    ];

    const featuredContent = [
        {
            title: "Weekly Tax Update",
            description: "Latest developments in tax law and regulations affecting businesses across different jurisdictions.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Monthly Regulatory Brief",
            description: "Comprehensive overview of regulatory changes and their implications for business compliance.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Quarterly Market Insights",
            description: "Strategic analysis of market trends and opportunities for business growth and development.",
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
                name: "Jennifer Walsh",
                title: "Content Strategy Manager",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default NewslettersPage;
