import React from 'react';

const MergersAcquisitionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mergers & Acquisitions</h1>
        <p className="text-xl text-gray-600">
          Strategic M&A advisory services to help you navigate complex transactions, maximize value, and achieve your business objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our M&A Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Transaction strategy development
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Due diligence support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Valuation and pricing analysis
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Deal structuring and negotiation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Integration planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Post-merger support
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Our M&A Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Strategic expertise
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Market knowledge
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Value maximization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
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
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Execute Successful Transactions</h2>
        <p className="text-gray-700 mb-4">
          Our M&A experts guide you through every stage of the transaction process to ensure optimal outcomes and value realization.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MergersAcquisitionsPage;
