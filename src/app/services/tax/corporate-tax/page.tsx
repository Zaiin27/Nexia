import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const CorporateTaxPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Corporate Tax" }
  ];

  const paragraphs = [
    "With global reach, Nexia's member firms offer extensive expertise in cross-border tax consulting, making them an ideal partner for international businesses.",
    "From tax compliance to planning and advisory, they provide tailored solutions informed by the latest industry developments, including BEPS, FATCA, the Common Reporting Standard, e-commerce, transfer pricing and expatriate taxation.",
    "Our services cover a range of international and domestic tax issues:"
  ];

  const taxServices = {
    international: [
      "Tax residency",
      "Cross-border planning and structuring", 
      "Withholding tax and FATCA compliance",
      "Permanent Establishment (PE) matters"
    ],
    domestic: [
      "M&A tax",
      "Domestic planning and structuring",
      "Tax due diligence",
      "Export tax incentives",
      "R&D tax relief",
      "State, regional, and local taxes"
    ]
  };

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />
      
      {/* Tax Services Lists */}
      <div className="max-w-4xl mt-8">
        {/* International Tax */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">International Tax</h3>
          <ul className="space-y-2">
            {taxServices.international.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span className="text-gray-700 text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tax compliance and reporting */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Tax compliance and reporting</h3>
          <ul className="space-y-2">
            {taxServices.domestic.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span className="text-gray-700 text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="mt-2 pt-2 ">
          <p className="text-gray-700">
            For more information, please email{" "}
            <a href="mailto:tax@nexia.com" className="text-teal-600 hover:text-teal-700 font-medium">
              tax@nexia.com
            </a>{" "}
            or contact:
          </p>
        </div>
      </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Mr.Priyesh Vira"
          company="CBV & Associates"
          location="India"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/09/PartnerCV-10872.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default CorporateTaxPage;