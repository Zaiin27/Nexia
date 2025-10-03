import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const TransferPricingPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Transfer Pricing" }
  ];

  const paragraphs = [
    "Cross-border transactions are facing increased scrutiny from tax authorities, making compliance with transfer pricing regulations more critical than ever.",
    "Failure to comply can lead to significant penalties and interest on late tax payments. Our member firms’ transfer pricing specialists provide expert guidance to ensure your business meets all legal requirements while protecting profit margins on related-party transactions."
  ];

  const taxServices = {
    international: [
      "Transfer Pricing Documentation: Comprehensive documentation to support intercompany transactions and pricing policies",
      "Benchmarking Studies: Detailed analysis of comparable transactions to establish arm's length pricing", 
      "Advance Pricing Agreements: Negotiating APAs with tax authorities to provide certainty on transfer pricing methods",
      "Transfer Pricing Audits: Defending transfer pricing positions during tax authority examinations",
      "Dispute Resolution: Resolving transfer pricing disputes through competent authority procedures and litigation support",
      "Policy Development: Creating and implementing global transfer pricing policies aligned with business operations"
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
                    <span className="font-bold">{title}:</span> {description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700">
          With the growing complexity of global tax regulations, having a sound transfer pricing policy is essential for avoiding costly non-compliance risks. Nexia firms ensure your business is well-prepared and compliant, enabling you to focus on growth and profitability.
          </p>
        </div>

      </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Dawn Ross"
          company="Peterborough – Nexia Saffery"
          location="United Kingdom"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/01/Dawn-ROss.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default TransferPricingPage;
