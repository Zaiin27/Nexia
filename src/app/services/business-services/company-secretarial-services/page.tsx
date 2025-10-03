import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const CompanySecretarialServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Company Secretarial Services" }
  ];

  const paragraphs = [
    "Outsourcing company secretarial services ensures accuracy and compliance with legal requirements, reducing the risk of penalties or legal complications.",
  ];

  const taxServices = {
    international: [
      "Maintaining company records",
      "Preparing and filing annual returns", 
      "Managing board and shareholder meetings",
      "Drafting resolutions",
      "Ensuring compliance with corporate governance"
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
            Professional support helps businesses streamline administrative tasks, maintain up-to-date records and stay focused on core operations. Additionally, with their expertise in corporate governance, Nexia members provide valuable advice to safeguard the company's reputation and ensure transparency, which is critical for long-term success.
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

export default CompanySecretarialServicesPage;
