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
        <div 
            className="relative overflow-hidden"
            style={{ backgroundColor: colors.Light }}
        >
            {/* Desktop Layout */}
            <div className="hidden lg:flex min-h-[48vh]">
                {/* Left Section - Text */}
                <div className="flex-[0.4] flex flex-col justify-center px-8 lg:px-16 py-16">
                    <div className="max-w-2xl">
                        {isMainIndustriesPage ? (
                            <>
                                <h1 className="text-5xl font-normal mb-4 text-white">{title}</h1>
                                {subtitle && (
                                    <p
                                        className="text-lg"
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
                                <h1 className="text-4xl font-normal text-white">{title}</h1>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Section - Image Container */}
                <div className="flex-[0.6] relative flex items-center justify-end pl-8 pr-12 py-8">
                    {backgroundImage && (
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat shadow-2xl rounded-tl-[3rem] rounded-br-[3rem]"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                minHeight: '320px',
                                maxWidth: '70%'
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden min-h-[40vh]">
                {/* Left Section - Text */}
                <div className="flex-[0.4] flex flex-col justify-center px-6 py-12">
                    <div className="max-w-xl">
                        {isMainIndustriesPage ? (
                            <>
                                <h1 className="text-4xl font-normal mb-3 text-white">{title}</h1>
                                {subtitle && (
                                    <p
                                        className="text-lg"
                                        style={{ color: colors.primaryLight }}
                                    >
                                        {subtitle}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <div
                                    className="text-xl font-semibold mb-2"
                                    style={{ color: colors.primaryLight }}
                                >
                                    {subtitle || "Industry"}
                                </div>
                                <h1 className="text-4xl font-normal text-white">{title}</h1>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Section - Image Container */}
                <div className="flex-[0.6] relative flex items-center justify-end pl-6 pr-8 py-6">
                    {backgroundImage && (
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat shadow-xl rounded-tl-[2rem] rounded-br-[2rem]"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                minHeight: '280px',
                                maxWidth: '75%'
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex flex-col md:hidden min-h-[50vh]">
                {/* Top Section - Text */}
                <div className="flex-[0.5] flex flex-col justify-center px-6 py-8">
                    <div className="text-center">
                        {isMainIndustriesPage ? (
                            <>
                                <h1 className="text-3xl font-normal mb-3 text-white">{title}</h1>
                                {subtitle && (
                                    <p
                                        className="text-base"
                                        style={{ color: colors.primaryLight }}
                                    >
                                        {subtitle}
                                    </p>
                                )}
                            </>
                        ) : (
                            <>
                                <div
                                    className="text-lg font-semibold mb-2"
                                    style={{ color: colors.primaryLight }}
                                >
                                    {subtitle || "Industry"}
                                </div>
                                <h1 className="text-3xl font-normal text-white">{title}</h1>
                            </>
                        )}
                    </div>
                </div>

                {/* Bottom Section - Image */}
                {backgroundImage && (
                    <div className="flex-[0.5] relative px-4 pt-4 pb-8">
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat shadow-lg rounded-tl-[1.5rem] rounded-br-[1.5rem]"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                minHeight: '200px'
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default IndustryHeader;
