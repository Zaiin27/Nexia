import React from 'react';
import { useTheme } from '@/hooks/useTheme';

interface IndustryHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const IndustryHeader: React.FC<IndustryHeaderProps> = ({ title, subtitle, backgroundImage }) => {
    const { colors } = useTheme();

    // Check if this is a specific industry page or main industries page
    const isMainIndustriesPage = title === "Industries";

    return (
        <div className="relative overflow-hidden">
            <div className="flex min-h-[400px]">
                {/* Left Section - Text */}
                <div 
                    className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16"
                    style={{ backgroundColor: colors.bgDark }}
                >
                    <div className="max-w-2xl">
                        {isMainIndustriesPage ? (
                            <>
                                <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
                                {subtitle && (
                                    <p
                                        className="text-xl"
                                        style={{ color: colors.primaryLight }}
                                    >
                                        {subtitle}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                {/* For industry pages, show category in primary light and industry name in white */}
                                <div
                                    className="text-2xl font-semibold mb-2"
                                    style={{ color: colors.primaryLight }}
                                >
                                    {subtitle || "Industry"}
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="flex-1 relative">
                    {backgroundImage ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                            }}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gray-300"></div>
                    )}
                    
                    {/* Rounded corners overlay for image */}
                    <div className="absolute inset-0 bg-transparent rounded-l-3xl overflow-hidden"></div>
                </div>
            </div>
        </div>
    );
};

export default IndustryHeader;
