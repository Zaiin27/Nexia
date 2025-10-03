import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const CompanyEstablishmentPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Company Establishment" }
  ];

  const paragraphs = [
    "Nexia's global footprint enables its members to offers company establishment services to assist clients in setting up their businesses efficiently and in compliance with local legal requirements.",
  ];

  const taxServices = {
    international: [
      "Business structuring",
      "Business registration", 
      "Obtaining licences",
      "Tax registration",
      "Drafting documents",
      "Setting up bank accounts"
    ]
  };

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />
      
      {/* Tax Services Lists */}
      <div className="max-w-4xl mt-5">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700">Nexia's solutions include:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {taxServices.international.map((service, index) => {
              return (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              );
            })}
          </ul>
        </div>
 
        {/* Contact Information */}
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700">
            The benefits of outsourcing company establishment to Nexia professionals include saving time and ensuring compliance with complex regulatory requirements. With our expertise, accounting firms help clients avoid common pitfalls, reduce administrative burdens and ensure all legal and financial aspects are properly addressed. This professional guidance allows entrepreneurs to focus on strategic planning and operational setup, knowing their business foundation is solid and optimised for future growth.
          </p>
        </div>

      </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Sophocles Kleovoulou"
          company="Cape Town - Nexia SAB&T"
          location="South Africa"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/10/PartnerCV-5131.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default CompanyEstablishmentPage;
