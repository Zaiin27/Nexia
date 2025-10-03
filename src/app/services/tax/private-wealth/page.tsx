import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const PrivateWealthPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Private Wealth" }
  ];

  const paragraphs = [
    "Managing personal and business wealth requires careful planning and a tailored approach to ensure long-term financial success.",
    "Nexia’s member firms offer a full range of services to help business owners, executives and individuals define their financial goals, maximise their assets and protect their wealth. By aligning with your priorities, we create bespoke strategies to ensure financial security for you, your family, and your business.",
  ];

  const taxServices = {
    international: [
      "Personal Tax Management: Efficiently managing tax liabilities to optimise financial outcomes",
      "International Tax Planning: Strategic cross-border planning to navigate complex tax regulations", 
      "Organisational Structure: Creating optimal business structures to support growth and tax efficiency",
      "Family Trusts and Shareholder Agreements: Safeguarding wealth through family trusts and legal agreements",
      "Employee Compensation and Benefits: Designing competitive employee packages while managing costs",
      "Insurance and Fiduciary Services: Protecting assets through tailored insurance and fiduciary solutions",
      "Retirement and Pensions Planning: Ensuring long-term financial security through comprehensive retirement strategies",
      "Investment Strategy: Developing diversified investment portfolios to grow and preserve wealth",
      "Corporate Finance and Debt Structuring: Supporting business growth through strategic financing and debt management",
      "Estate and Succession Planning: Securing the future of your family and business through careful succession planning",
      "Wills and Power of Attorney: Ensuring your wishes are respected and legal matters are managed effectively"
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
      
      </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Clare Cromwell"
          company="Nexia Shaffery"
          location="United Kingdom"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/01/clare-cromwell.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default PrivateWealthPage;
