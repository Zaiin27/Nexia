import React from 'react';

const TransactionServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transaction Services</h1>
        <p className="text-xl text-gray-600">
          Professional transaction support services to ensure successful deal execution, value realization, and seamless integration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Financial due diligence
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Quality of earnings analysis
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Working capital assessment
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Transaction structuring
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Integration planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Post-transaction support
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Our Transaction Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Deep industry expertise
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Comprehensive analysis
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Value optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk identification
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Seamless execution
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Long-term success
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Ensure Transaction Success</h2>
        <p className="text-gray-700 mb-4">
          Our transaction services team provides comprehensive support throughout the deal lifecycle to maximize value and ensure successful outcomes.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TransactionServicesPage;
