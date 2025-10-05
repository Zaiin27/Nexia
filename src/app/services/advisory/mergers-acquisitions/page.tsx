'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";

import { relatedInsightsData } from '@/data/relatedInsights';
import { servicesCardsData } from '@/utils/constants';

const MergersAcquisitionsPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Mergers & Acquisitions" }
  ];

  const paragraphs = [
    "Mergers and acquisitions (M&A) offer businesses the opportunity to grow, downsize, or change their competitive position.",
    "Whether expanding into new markets, streamlining operations or enhancing capabilities, M&A can transform the trajectory of your business. However, these transactions involve the transfer of company ownership or operating units and making the right choices is essential for success.",
  ];


  const pageData = servicesCardsData['mergers-acquisitions'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />

      {/* M&A Services Lists */}
      <div className="max-w-4xl mt-5">

        {/* Benefits Section */}
        <div className="mt-2 pt-2 md:pt-0 md:mt-0">
          <p className="text-gray-700 mb-4 text-lg">
          At Nexia, our member firms have extensive expertise in guiding businesses through the complexities of M&A, ensuring well-informed decisions and optimal outcomes. We focus on achieving successful outcomes for your business and its stakeholders. Our member firms’ expertise ensures that your M&A activities are aligned with your long-term goals, helping to safeguard your company’s future.
          </p>
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

export default MergersAcquisitionsPage;