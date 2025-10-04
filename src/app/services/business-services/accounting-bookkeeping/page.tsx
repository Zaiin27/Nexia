import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const AccountingBookkeepingPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Accounting and Bookkeeping" }
  ];

  const paragraphs = [
    "Outsourcing your accounting and bookkeeping to a Nexia member firm offers significant benefits to your business.",
    "By leveraging advanced accounting software and tools, our members ensure accuracy, compliance with regulatory requirements and real-time access to financial data.",
  ];

  const taxServices = {
    international: [
      "Preparing and maintaining accurate financial records",
      "Managing accounts payable and receivable",
      "Reconciling bank statements",
      "Financial reporting and analysis",
      "Budgeting and forecasting"
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
          <p className="text-gray-700">Nexia's services include:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {taxServices.international.map((service, index) => {
              const [title, description] = service.split(': ');
              return (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">
                    <span className="">{title}:</span> {description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700">
            One of the key advantages for outsourcing is cost-effectiveness. By engaging a Nexia member firm you eliminate the need to hire, train and maintain an in-house accounting team, reducing overhead expenses. Our firms bring expertise and up-to-date knowledge of tax laws, regulations and best practices, minimising errors and ensuring compliance.
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

export default AccountingBookkeepingPage;
