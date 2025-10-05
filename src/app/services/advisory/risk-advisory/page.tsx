'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

import { relatedInsightsData } from '@/data/relatedInsights';
import { servicesCardsData } from '@/utils/constants';

const RiskAdvisoryPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Risk Advisory" }
  ];

  const paragraphs = [
    "The Nexia Risk Advisory specialists protect and enhance the value of our clients’ businesses, embedding governance, risk management and compliance requirements across processes and technologies.",
    "These services provide a solid platform to perform effective governance and oversight on people, processes and technology across business activities and service providers.",
  ];

  const riskServices = {
    services: [
      "Cyber Security",
      "Internal audit",
      "IT advisory & assurance",
      "Fraud & Forensics",
      "Emerging technologies, such as Robot Process Automation (RPA) and Artificial Intelligence (AI)."
    ]
  };

  const corporateGovernanceServices = [
    "Financial, commercial, operational, tax, human resources, technology and corporate finance quality of earnings due diligence.",
    "Acting as reporting accountants to companies seeking admission to public markets."
  ];

  const pageData = servicesCardsData['risk-advisory'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />

      {/* Risk Advisory Services Lists */}
      <div className="max-w-4xl mt-5">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700">Member firms’ solutions cover:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {riskServices.services.map((service, index) => {
              return (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Corporate governance and risk advisory Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-black mb-4">Corporate governance and risk advisory</h3>
          <p className="text-gray-700 mb-4">
            Our member firms work with both corporate vendors, purchasers and sellers to meet the needs of private equity houses, banks and corporate acquirers and sellers globally. Member firms' expertise comprises:
          </p>
          <ul className="space-y-2 md:ml-10">
            {corporateGovernanceServices.map((service, index) => {
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

      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>

        <PersonCard
          name="Christoph Schillinger"
          company="CONSULTATIO"
          location="Austria"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/09/PartnerCV-8010.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default RiskAdvisoryPage;
