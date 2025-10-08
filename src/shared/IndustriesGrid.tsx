import React from 'react';
import Link from 'next/link';

interface IndustryCard {
    title: string;
    href: string;
    image: string;
}

interface IndustriesGridProps {
    title?: string;
    industries?: IndustryCard[];
}

const defaultIndustries: IndustryCard[] = [
    {
        title: "Financial Services",
        href: "/industries/financial-service",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Manufacturing",
        href: "/industries/manufacturing",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Mining, Natural Resources & Renewable Energy",
        href: "/industries/mining",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Real Estate",
        href: "/industries/real-estate",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Retail",
        href: "/industries/retail",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
        title: "Technology",
        href: "/industries/technology",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
];

const IndustriesGrid: React.FC<IndustriesGridProps> = ({ 
    title = "Industries", 
    industries = defaultIndustries 
}) => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Link
                            key={index}
                            href={industry.href}
                            className="group relative overflow-hidden rounded-2xl h-64 bg-gray-200 shadow-md hover:rounded-tr-[2rem] hover:rounded-bl-[2rem] hover:rounded-tl-none hover:rounded-br-none transition-all duration-300"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${industry.image})`
                                }}
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            
                            {/* Title in Top Left */}
                            <div className="absolute top-0 left-0 p-6">
                                <h3 className="text-[1.3rem] font-semibold text-white">
                                    {industry.title}
                                </h3>
                            </div>
                          
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesGrid;
