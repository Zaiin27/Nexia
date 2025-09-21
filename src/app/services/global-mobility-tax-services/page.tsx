import React from 'react';

const GlobalMobilityTaxServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Global Mobility Tax Services</h1>
        <p className="text-xl text-gray-600">
          Specialized tax services for international assignments, expatriate taxation, and global workforce mobility solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expatriate tax compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              International assignment planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax equalization programs
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cross-border tax planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Social security coordination
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Repatriation tax planning
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Global Mobility Matters</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Talent acquisition and retention
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Global business expansion
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance across jurisdictions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Employee satisfaction
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Navigate Global Tax Complexity</h2>
        <p className="text-gray-700 mb-4">
          Our global mobility experts help you manage the complex tax implications of international assignments and global workforce strategies.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GlobalMobilityTaxServicesPage;
