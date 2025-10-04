import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const PressReleasesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Press Releases" }
    ];

    const paragraphs = [
        "Stay updated with our latest news, announcements, and press releases covering our firm's activities, achievements, and thought leadership initiatives.",
        "Our press releases provide timely information about new service offerings, strategic partnerships, leadership appointments, and other important developments within our organization.",
        "From major announcements to regular updates, our press releases keep stakeholders informed about our continued growth and commitment to excellence in professional services."
    ];

    const featuredContent = [
        {
            title: "Nexia International Expands Global Network",
            description: "Announcement of new member firms joining our international network across key markets.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "New ESG Advisory Services Launch",
            description: "Introduction of comprehensive Environmental, Social, and Governance advisory services for clients worldwide.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Technology Innovation Partnership",
            description: "Strategic partnership with leading technology providers to enhance our digital service capabilities.",
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
                name: "Rachel Green",
                title: "Communications Director",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default PressReleasesPage;
