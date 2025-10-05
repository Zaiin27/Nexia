'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import RelatedInsights from '@/shared/RelatedInsights';

import { servicesCardsData } from '@/utils/constants';


const LegalPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Legal" }
  ];

  const paragraphs = [
    "Legal experts within Nexia member firms serve clients across a range of sectors around the world and can deliver different legal services to help clients in their business endeavours. Being a major building block to ascertain business resilience over the long-term, lawyers are regularly integrated into important business steps with the team offering seamless one-stop-shop client service",
  
  ];

  const legalServices = {
    services: [
      "CCorporate, competition and M&A",
      "Intellectual property, IT and data privacy",
      "Labour",
      "Real estate",
      "Litigation and dispute resolution",
      "Private clients – inheritance, estate and business succession planning."
    ]
  };

  const pageData = servicesCardsData['legal'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />

      {/* Legal Services Lists */}
      <div className="max-w-4xl mt-5">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700">Member firms’ solutions cover:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {legalServices.services.map((service, index) => {
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
          <p className="text-gray-700 mb-4">
            For more information, please email <a className='text-teal-500' href="mailto:advisory@nexia.com">advisory@nexia.com</a> or contact:
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
