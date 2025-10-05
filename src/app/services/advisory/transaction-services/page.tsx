'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";
import { relatedInsightsData } from '@/data/relatedInsights';
import { servicesCardsData } from '@/utils/constants';

const TransactionServicesPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Transaction Services" }
  ];

  const paragraphs = [
    "Knowing a business before taking big steps is essential to corporate finance activities. Whether you are looking to raise funds, expand, merge, or sell your business.",
    "Member firms' transactional advisory experts offer national and cross-border know-how to run efficient and high-quality tax and financial due diligences.",
  ];

  const transactionServices = [
    "Financial due diligence",
    "Tax due diligence",
    "IT due diligence",
    "Transaction tax structuring",
    "IPO readiness",
    "Capital markets listing accounting review",
    "Purchase agreement consulting",
    "Post-merger integration"
  ];

  const pageData = servicesCardsData['transaction-services'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />

      {/* Transaction Services Lists */}
      <div className="max-w-4xl mt-5">
        {/* Nexia's Services */}
        <div className="mb-5">
          <p className="text-gray-700">Member firms' solutions cover:</p>
          <ul className="space-y-2 md:ml-10 mt-4">
            {transactionServices.map((service, index) => {
              return (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Button Section */}
        <div className="mt-8">
          <button className="bg-gray-800 text-teal-500 cursor-pointer hover:underline px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
            Global Deal Highlights 2025
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <p className="text-gray-700 mb-4">
            For more information, please email <a className='text-teal-500' href="mailto:advisory@nexia.com">advisory@nexia.com</a> or contact:
          </p>
        </div>
      </div>

      {/* Chair Section */}
      <div className="max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Chair(s)</h2>

        <PersonCard
          name="Niraj Patel"
          company="Nexia Saffery"
          location="United Kingdom"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/01/Niraj.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>
    </div>
  );
};

export default TransactionServicesPage;
