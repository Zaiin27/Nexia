import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

const GlobalMobilityTaxServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tax", href: "/services/tax" },
    { label: "Global Mobility Tax Services" }
  ];

  const paragraphs = [
    "Navigating the complexities of relocating employees internationally requires expert guidance on tax, social security and compliance.",
    "Nexia’s member firms specialise in global mobility tax services, offering practical advice on expatriate tax planning and logistical support for international assignments. Whether you’re relocating employees abroad or managing personal tax affairs across borders, our member firms ensure comprehensive pre-departure and return planning, helping you meet all regulatory requirements.",
    "With expertise in both individual and corporate global mobility needs, our services cover:"
  ];

  const taxServices = {
    international: [
      "Tax and social security planning",
      "Pre-departure and arrival tax interviews", 
      "Employee benefits and payroll management",
      "Reporting in line with the Posted Workers Directive",
      "Certificates of coverage",
      "Preparation of tax returns and compliance",
      "Tax equalisation and protection strategies",
      "Guidance on immigration, labour law, visas, and work permits (where applicable)"
    ],
  };

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />
      
      {/* Tax Services Lists */}
      <div className="max-w-4xl md:ml-10">
        {/* International Tax */}
        <div className="mb-5">
          <ul className="space-y-2">
            {taxServices.international.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span className="text-gray-700 ">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Information */}
      </div>
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700">
            For more information, please email{" "}
            <a href="mailto:tax@nexia.com" className="text-teal-600 hover:text-teal-700 font-medium">
              tax@nexia.com
            </a>{" "}
            or contact:
          </p>
        </div>
      
      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>
        
        <PersonCard
          name="Adam Barcikowski"
          company="Nexia Advicero"
          location="Poland"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/01/Adam-Barcikowski.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default GlobalMobilityTaxServicesPage;
