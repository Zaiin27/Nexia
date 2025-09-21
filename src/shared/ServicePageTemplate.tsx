import React from 'react';
import PersonCard from "./PersonCard";

interface ServicePageTemplateProps {
  breadcrumbs: Array<{ label: string; href?: string }>;
  paragraphs: string[];
  chairName?: string;
  chairCompany?: string;
  chairLocation?: string;
  chairImage?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  breadcrumbs,
  paragraphs,
  chairName,
  chairCompany,
  chairLocation,
  chairImage = "/api/placeholder/96/96"
}) => {
  return (
    <div className="max-w-4xl md:-mt-10">
      {/* Main Content */}
      <div className="space-y-8">
        {/* Content Paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-6">
            <p className={`leading-relaxed ${
              index === 0 
                ? 'text-2xl text-gray-800 font-bold mb-4' 
                : 'text-base text-gray-800'
            }`}>
              {paragraph}
            </p>
          </div>
        ))}

        {/* Chair Section */}
        {chairName && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
            
            <PersonCard
              name={chairName}
              company={chairCompany || ""}
              location={chairLocation || ""}
              image={chairImage}
              buttonText="Contact"
              buttonHref="#"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePageTemplate;
