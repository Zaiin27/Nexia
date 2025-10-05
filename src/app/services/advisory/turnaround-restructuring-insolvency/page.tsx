'use client';
import React from 'react';
import ServicePageTemplate from "@/shared/ServicePageTemplate";
import PersonCard from "@/shared/PersonCard";
import { relatedInsightsData } from '@/data/relatedInsights';
import { servicesCardsData } from '@/utils/constants';

const TurnaroundRestructuringInsolvencyPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Advisory", href: "/services/advisory" },
    { label: "Turnaround Restructuring Insolvency" }
  ];

  const paragraphs = [
    "Nexia's TRI group supports businesses facing cross-border operational challenges or financial distress. Our worldwide team of specialists offers unrivalled global expertise in turnaround, restructuring, insolvencies, investigations, and profit improvement.",
  ];

  const pageData = servicesCardsData['turnaround-restructuring-insolvency'];

  return (
    <div>
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        paragraphs={paragraphs}
      />

      {/* TRI Content Sections */}
      <div className="max-w-4xl mt-5">
        {/* Who we are Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Who we are</h3>
          <p className="text-gray-700 mb-4">
            Nexia has extensive experience across industries and countries. Our understanding of local and international operations, coupled with our knowledge of varying practices across jurisdictions, means that local expertise is crucial. Our global approach leverages the strength of nearly 250 Nexia member firms to provide seamless global service.
          </p>
        </div>

        {/* How can we help you? Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">How can we help you?</h3>
          <p className="text-gray-700 mb-4">
            Nexia helps with cross-border TRI problems by working with management teams and stakeholders to address profitability, identify turnaround and restructuring options, provide implementation guidance, undertake international asset recovery investigations, and work with external stakeholders on business viability and insolvencies.
          </p>
        </div>

        {/* Why choose us? Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-teal-600 mb-4">Why choose us?</h3>
          <p className="text-gray-700 mb-4">
            Choosing Nexia TRI provides advice from a world-leading team, harnesses local expertise with global consistency, and ensures projects are partner-led from a local Nexia member firm. Our global reach but local client service means you get the best of both worlds.
          </p>
        </div>

        {/* Download Links Section */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            Download our Turnaround Restructuring Insolvency Service Brochure <a className='text-teal-500' href="#">here</a>.
          </p>
          <p className="text-gray-700 mb-4">
            Please <a className='text-teal-500' href="#">click here</a> to listen to our series of our TRI podcast.
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
          name="Sophocles Kleovoulou"
          company="Cape Town - Nexia SAB&T"
          location="South Africa"
          image="https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/10/PartnerCV-5131.jpg"
          buttonText="View Profile"
          buttonHref="#"
        />
      </div>

    </div>
  );
};

export default TurnaroundRestructuringInsolvencyPage;
