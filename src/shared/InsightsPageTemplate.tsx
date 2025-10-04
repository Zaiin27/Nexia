import React from 'react';

interface InsightsPageTemplateProps {
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

const InsightsPageTemplate: React.FC<InsightsPageTemplateProps> = ({
    breadcrumbs,
    paragraphs,
    featuredContent = [],
    author
}) => {
    return (
        <div className="max-w-4xl md:-mt-10">
            {/* Main Content */}
            <div className="space-y-8">
                {/* Content Paragraphs */}
                {paragraphs.map((paragraph, index) => (
                    <div key={index} className="mb-6">
                        <p className={`leading-relaxed ${index === 0
                            ? 'text-2xl text-gray-800 font-semibold mb-4'
                            : 'text-base text-gray-800'
                            }`}>
                            {paragraph}
                        </p>
                    </div>
                ))}

                {/* Featured Content Section */}
                {featuredContent.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Content</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {featuredContent.map((content, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-6">
                                    {content.image && (
                                        <div className="mb-4">
                                            <img
                                                src={content.image}
                                                alt={content.title}
                                                className="w-full h-48 object-cover rounded-md"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {content.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        {content.description}
                                    </p>
                                    {content.link && (
                                        <a
                                            href={content.link}
                                            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Author Section */}
                {author && (
                    <div className="mt-12 bg-gray-50 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">About the Author</h2>

                        <div className="flex items-start space-x-4">
                            {author.image && (
                                <img
                                    src={author.image}
                                    alt={author.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{author.name}</h3>
                                <p className="text-gray-700 font-medium">{author.title}</p>
                                <p className="text-gray-600">{author.company}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InsightsPageTemplate;
