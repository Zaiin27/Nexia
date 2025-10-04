import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const VideosPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Videos" }
    ];

    const paragraphs = [
        "Watch our engaging video content featuring expert insights, client success stories, and educational content on key business and regulatory topics.",
        "Our video library includes webinars, interviews, educational series, and thought leadership content designed to provide valuable insights in an accessible format.",
        "From technical explanations of complex regulations to strategic discussions about business growth, our videos offer visual learning opportunities for professionals and business leaders."
    ];

    const featuredContent = [
        {
            title: "ESG Reporting Webinar Series",
            description: "Comprehensive video series explaining Environmental, Social, and Governance reporting requirements and best practices.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Client Success Stories",
            description: "Video testimonials and case studies showcasing successful client engagements and outcomes.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Expert Interview Series",
            description: "In-depth conversations with industry experts on emerging trends and regulatory developments.",
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
                name: "Alex Johnson",
                title: "Video Content Producer",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default VideosPage;
