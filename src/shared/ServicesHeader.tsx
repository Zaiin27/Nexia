import React from 'react';

interface ServicesHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  // Check if this is a specific service page or main services page
  const isMainServicesPage = title === "Our Services";
  
  return (
    <div className="bg-teal-600 text-white py-24 relative overflow-hidden">
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
                <p className="text-xl text-teal-100">{subtitle}</p>
              )}
            </>
          ) : (
            <>
              {/* For service pages, show category in teal and service name in white */}
              <div className="text-teal-300 text-2xl font-semibold mb-2">
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
