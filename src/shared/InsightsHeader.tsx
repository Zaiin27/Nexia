import React from 'react';
import { useTheme } from '@/hooks/useTheme';

interface InsightsHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const InsightsHeader: React.FC<InsightsHeaderProps> = ({ title, subtitle, backgroundImage }) => {
    const { colors } = useTheme();

    // Check if this is a specific insight page or main insights page
    const isMainInsightsPage = title === "Insights";

    return (
        <div
            className="text-white py-24 relative overflow-hidden"
            style={{ backgroundColor: colors.primary }}
        >
            {/* Background Image or Pattern */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
                    }}
                />
            ) : (
                <></>
            )}

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    {isMainInsightsPage ? (
                        <>
                            <h1 className="text-5xl font-bold mb-4">{title}</h1>
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
                            {/* For insight pages, show category in primary light and insight name in white */}
                            <div
                                className="text-2xl font-semibold mb-2"
                                style={{ color: colors.primaryLight }}
                            >
                                {subtitle || "Insights"}
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default InsightsHeader;
