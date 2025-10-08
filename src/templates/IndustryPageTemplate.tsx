import React from 'react';
import IndustriesGrid from '@/shared/IndustriesGrid';

interface IndustryPageTemplateProps {
    breadcrumbs: Array<{ label: string; href?: string }>;
    paragraphs: string[];
    featuredContent?: {
        title: string;
        description: string;
        image?: string;
        link?: string;
    }[];
    author?: {
        name: string;
        title: string;
        company: string;
        image?: string;
    };
}

const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({
    breadcrumbs,
    paragraphs,
    featuredContent = [],
    author
}) => {
    return (
        <div>
            {/* Main Content */}
            <div className="max-w-3xl md:-mt-10">
                <div className="space-y-8">
                    {/* Large Heading - First Paragraph as Main Heading */}
                    <div className="mb-8">
                        <h1 className="text-xl lg:text-2xl font-medium text-gray-900 leading-8 mb-6">
                            {paragraphs[0]}
                        </h1>
                    </div>

                    {/* Content Paragraphs */}
                    {paragraphs.slice(1).map((paragraph, index) => (
                        <div key={index} className="mb-6">
                            <p className="text-base text-gray-700 leading-6">
                                {paragraph}
                            </p>
                        </div>
                    ))}

                    {/* Contact Information */}
                    <div className="border-gray-200">
                        <p className="text-base text-gray-700">
                            For more information, please contact{' '}
                            <a 
                                href="mailto:advisory@nexia.com" 
                                className="text-teal-500 hover:text-teal-600 font-medium"
                            >
                                advisory@nexia.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Industries Grid Section - Full Width */}
            <IndustriesGrid />
        </div>
    );
};

export default IndustryPageTemplate;
