import React from 'react';
import { useTheme } from '@/hooks/useTheme';

interface ServicesHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const { colors } = useTheme();

  // Check if this is a specific service page or main services page
  const isMainServicesPage = title === "Our Services";

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
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      ) : (
        <></>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {isMainServicesPage ? (
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
              {/* For service pages, show category in primary light and service name in white */}
              <div
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.primaryLight }}
              >
                {subtitle || "Service"}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h1>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default ServicesHeader;
