import React from 'react';
import { theme } from '@/config/theme';

interface AboutHeaderProps {
  title: string;
  subtitle?: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ title, subtitle }) => {
  // Check if this is the main about page or a specific about page
  const isMainAboutPage = title === "About Nexia";
  
  return (
    <div 
      className="text-white py-24 relative overflow-hidden"
      style={{ backgroundColor: theme.colors.Light }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl pl-8">
          {isMainAboutPage ? (
            <>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
              {subtitle && (
                <p className="text-xl text-teal-100">{subtitle}</p>
              )}
            </>
          ) : (
            <>
             
              <h1 className="text-2xl lg:text-5xl font-normal text-white">{title}</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
