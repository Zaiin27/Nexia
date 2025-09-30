import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const IndirectTaxesPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Indirect Taxes" }
  ];

  const paragraphs = [
    "Indirect taxes like VAT and GST are crucial for businesses operating across borders in a globalized economy.",
    "Over 160 countries implement VAT or GST, each with varying local regulations, making navigation of these complex tax systems critical for compliance and optimizing tax efficiency. Nexia's member firms offer expert advice on indirect tax issues for businesses entering new markets, managing cross-border transactions, and avoiding costly pitfalls.",
    "They can significantly affect cash flow, profitability, and supply chains, emphasizing the need for careful planning and compliance to maintain a competitive edge. "
  ];

  const taxServices = {
    international: [
      "Indirect Tax Compliance: Ensuring timely and accurate Sales Tax and VAT/GST reporting to meet local and international obligations",
      "Indirect Tax Advisory: Strategic advice on tax efficiency, ensuring businesses maximise opportunities and minimise risks", 
      "Indirect Tax Structuring: Designing tax-efficient structures for cross-border transactions to reduce tax exposure",
      "Transaction-Specific Indirect Taxes: Handling stamp duties, transactional taxes and other location-specific requirements",
      "Indirect Tax Technology: Implementing technology solutions to streamline compliance and reporting processes",
      "Tax Audits, Disputes and Litigation: Support with audits, managing disputes and handling tax litigation",
      "Customs and Duties: Expert guidance on customs compliance and duty optimisation to reduce costs and avoid supply chain disruptions"
    ]
  };

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />
      
      {/* Tax Services Lists */}
      <div className="max-w-4xl mt-5 ">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700 ">Nexia's services include:</p>
          <ul className="space-y-2 md:ml-10">
            {taxServices.international.map((service, index) => {
              const [title, description] = service.split(': ');
              return (
                <li key={index} className="flex items-start">
                  
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700 ">
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
            For more information, please email{" "}
            <a href="mailto:tax@nexia.com" className="text-teal-600 hover:text-teal-700 font-medium">
              tax@nexia.com
            </a>{" "}
            or contact:
          </p>
        </div>
      </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Nick Hart"
          company="Nexia Stargate"
          location="United Kingdom"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/08/Hart-Nick.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default IndirectTaxesPage;
