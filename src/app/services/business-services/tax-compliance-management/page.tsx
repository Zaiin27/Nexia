import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const TaxComplianceManagementPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Tax Compliance Management" }
  ];

  const paragraphs = [
    "Nexia firms provide tax compliance management services to assist businesses in navigating the complexities of direct and indirect taxes.",
    "Outsourcing tax compliance ensures accuracy, reduces the risk of penalties and keeps businesses up to date with ever-changing tax regulations.",
  ];

  const taxServices = {
    international: [
      "Preparing and filing tax returns",
      "Calculation of tax liabilities", 
      "Management of VAT/GST",
      "Adherence to local and international tax law",
      "Tax audit support"
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
            With expert knowledge of direct and indirect tax frameworks, Nexia provide tailored solutions that align with the client's industry and operational needs. This enables businesses to focus on growth while minimizing tax-related risks and enhancing overall financial efficiency.
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

export default TaxComplianceManagementPage;
