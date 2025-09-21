import React from 'react';

const TransferPricingPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transfer Pricing</h1>
        <p className="text-xl text-gray-600">
          Specialized transfer pricing services to ensure compliance with international tax regulations and optimize intercompany transactions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Transfer pricing documentation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Benchmarking studies
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Advance pricing agreements
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Transfer pricing audits
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Dispute resolution
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Policy development
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Transfer Pricing Matters</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Audit defense
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Operational efficiency
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Global consistency
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Optimize Your Transfer Pricing Strategy</h2>
        <p className="text-gray-700 mb-4">
          Our transfer pricing specialists help you develop robust policies and documentation to ensure compliance and optimize your global tax position.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TransferPricingPage;
