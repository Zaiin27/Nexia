import React from 'react';

const BusinessPage = () => {
  const services = [
    {
      title: "Accounting and Bookkeeping",
      description: "Professional accounting and bookkeeping services to keep your finances organized and compliant.",
      link: "/services/business/accounting-bookkeeping"
    },
    {
      title: "Company Establishment",
      description: "Complete company formation and registration services for new businesses.",
      link: "/services/business/company-establishment"
    },
    {
      title: "Company Secretarial Services",
      description: "Comprehensive secretarial services to ensure regulatory compliance and good governance.",
      link: "/services/business/company-secretarial-services"
    },
    {
      title: "Financial Reporting",
      description: "Professional financial reporting services to meet regulatory requirements and stakeholder needs.",
      link: "/services/business/financial-reporting"
    },
    {
      title: "Payroll",
      description: "Complete payroll management services for accurate and timely employee compensation.",
      link: "/services/business/payroll"
    },
    {
      title: "Tax Compliance Management",
      description: "Comprehensive tax compliance services to ensure adherence to all tax regulations.",
      link: "/services/business/tax-compliance-management"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-teal-600 mb-3">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <a 
              href={service.link} 
              className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
