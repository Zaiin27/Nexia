import React from 'react';

const CorporateTaxPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Corporate Tax</h1>
        <p className="text-xl text-gray-600">
          Comprehensive corporate tax services to optimize your business tax position and ensure full compliance with tax regulations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Corporate tax return preparation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax planning and optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax provision calculations
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax audit support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax controversy resolution
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax efficiency optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance assurance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert guidance and support
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost savings opportunities
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Strategic tax planning
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Optimize Your Corporate Tax Position</h2>
        <p className="text-gray-700 mb-4">
          Let our corporate tax experts help you minimize your tax burden while ensuring full compliance with all applicable regulations.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CorporateTaxPage;
