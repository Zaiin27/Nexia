import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const PayrollPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business Services", href: "/services/business-services" },
    { label: "Payroll" }
  ];

  const paragraphs = [
    "Nexia firms offer payroll services to handle the end-to-end management of employee compensation processes.",
  ];

  const taxServices = {
    international: [
      "Wage calculation",
      "Withholding tax management", 
      "Benefits management",
      "Pay slip preparation",
      "Labour law compliance",
      "Year-end tax filings"
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
            Outsourcing payroll services ensures accuracy, compliance and timely payment, reducing the risk of errors, penalties or employee dissatisfaction. Professional payroll management saves businesses time and effort while ensuring adherence to ever-changing regulatory requirements. With experts managing this critical function, businesses can focus on strategic priorities, improve operational efficiency, and maintain employee trust.
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

export default PayrollPage;
