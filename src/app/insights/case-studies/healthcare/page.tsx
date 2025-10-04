import React from 'react';
import InsightsPageTemplate from "@/shared/InsightsPageTemplate";

const HealthcareCaseStudiesPage = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Case Studies", href: "/insights/case-studies" },
        { label: "Healthcare Industry" }
    ];

    const paragraphs = [
        "Explore our successful engagements in the healthcare sector, where we've helped healthcare providers, pharmaceutical companies, and medical technology firms navigate complex regulatory environments and achieve operational excellence.",
        "Our healthcare case studies demonstrate our deep understanding of the sector's unique challenges, including regulatory compliance, patient data protection, international expansion, and operational efficiency improvements.",
        "From supporting hospital systems in digital transformation to helping pharmaceutical companies with international tax planning, our expertise spans the entire healthcare ecosystem."
    ];

    const featuredContent = [
        {
            title: "Hospital System Digital Transformation",
            description: "Supporting a major hospital system in implementing electronic health records and improving patient data management.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Pharmaceutical Company Compliance",
            description: "Helping a pharmaceutical company navigate complex international regulations for drug approval and distribution.",
            image: "/api/placeholder/400/200",
            link: "#"
        },
        {
            title: "Medical Device Startup Growth",
            description: "Guiding a medical device startup through FDA approval processes and international market entry strategies.",
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
                name: "Dr. James Rodriguez",
                title: "Healthcare Industry Expert",
                company: "Nexia International",
                image: "/api/placeholder/64/64"
            }}
        />
    );
};

export default HealthcareCaseStudiesPage;
