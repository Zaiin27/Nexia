'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";
import Video from './features/Video';
import ESGFeatures from './features/ESGFeatures';

import { servicesCardsData } from '@/utils/constants';

const ESGEnvironmentSocialGovernancePage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "ESG – Environment, Social and Governance" }
  ];

  const paragraphs = [
    "Environmental, Social, and Governance (ESG) services have become essential for modern businesses. In an increasingly complex global market, companies are expected to go beyond financial success and demonstrate responsible practices across sustainability, ethics and governance.",
    "Nexia’s ESG services provide a framework to help businesses meet these growing expectations, aligning with the priorities of stakeholders, regulatory requirements and societal demands.",
  ];

  const esgServices = {
    services: [
      "Client demand",
      "Integration into strategy",
      "Reporting and disclosure",
      "Capacity building"
    ]
  };

  const pageData = servicesCardsData['esg-environment-social-governance'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />


      {/* Video Section */}
      <Video />

      {/* ESG Features Section */}
      <ESGFeatures />
      {/* ESG Services Lists */}
      <div className="max-w-4xl mt-5 md:mt-0">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700">We also offer services covering:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {esgServices.services.map((service, index) => {
              return (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Why ESG Matters */}
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700 mb-4">
          Please click <a className='text-teal-500' href="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/08/ESG-brochure-2025.pdf">here</a> to download Nexia’s ESG brochure.
          </p>
        </div>

        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700 mb-4">
          For more information, please email <a className='text-teal-500' href="mailto:advisory@nexia.com">advisory@nexia.com</a> or contact:
          </p>
        </div>
      </div>

      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>

        <PersonCard
          name="Mohamed Inaz"
          company="Nexia Maldives"
          location="Maldives"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/09/PartnerCV-12125.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>

    </div>
  );
};

export default ESGEnvironmentSocialGovernancePage;
