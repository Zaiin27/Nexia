import React from 'react';

const ESGEnvironmentSocialGovernancePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ESG – Environment, Social and Governance</h1>
        <p className="text-xl text-gray-600">
          Comprehensive ESG advisory services to help organizations build sustainable and responsible business practices that create long-term value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our ESG Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              ESG strategy development
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Sustainability reporting
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Carbon footprint assessment
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Social impact measurement
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Governance framework design
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              ESG risk assessment
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why ESG Matters</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Enhanced stakeholder trust
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Competitive advantage
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Long-term value creation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Access to sustainable finance
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Build Your ESG Excellence</h2>
        <p className="text-gray-700 mb-4">
          Our ESG experts help you develop and implement comprehensive sustainability strategies that drive business value and positive impact.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ESGEnvironmentSocialGovernancePage;
