import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const PodcastsPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Podcasts" }
    ];

    const paragraphs = [
        "Listen to our engaging podcast series featuring industry experts, business leaders, and thought leaders discussing the latest trends and challenges in professional services.",
        "Our podcasts provide accessible insights on complex topics, featuring interviews with practitioners, researchers, and industry experts who share their knowledge and experience.",
        "From technical discussions on regulatory changes to strategic conversations about business growth, our podcasts offer valuable perspectives for professionals at all levels."
    ];

    const featuredContent = [
        {
            title: "The Future of Professional Services",
            description: "Monthly podcast series exploring trends and innovations shaping the future of professional services.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Tax Talk with Experts",
            description: "Weekly discussions on tax law changes, compliance strategies, and international tax planning.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Business Growth Stories",
            description: "Inspiring conversations with successful business leaders about their growth strategies and lessons learned.",
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
                name: "Sarah Mitchell",
                title: "Podcast Host & Content Producer",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default PodcastsPage;
