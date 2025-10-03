import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const FinancialReportingPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Financial Reporting" }
  ];

  const paragraphs = [
    "Nexia provides financial reporting services to assist businesses in preparing accurate and timely financial statements in compliance with applicable accounting standards and regulatory requirements.",
    "Outsourcing financial reporting ensures accuracy, compliance and transparency, which are critical for building trust with stakeholders and investors."
  ];

  const taxServices = {
    international: [
      "Generating balance sheets, income statements, cash flow statements and other relevant reports",
      "Financial data consolidation", 
      "Financial analysis",
      "Preparation of management reports"
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
            Nexia firms bring expertise in navigating complex reporting requirements and provide valuable insights through detailed analysis. This allows businesses to make informed decisions while saving time and resources that would otherwise be spent managing these intricate processes in-house.
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

export default FinancialReportingPage;
