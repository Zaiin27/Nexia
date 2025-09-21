import React from 'react';

const PrivateWealthPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Private Wealth</h1>
        <p className="text-xl text-gray-600">
          Comprehensive tax planning and compliance services for high-net-worth individuals, families, and private clients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Personal tax planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Estate and inheritance planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Trust and foundation services
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Investment tax optimization
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              International tax compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Family office services
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Our Private Wealth Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Personalized approach
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Comprehensive tax strategies
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Wealth preservation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Multi-generational planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Confidentiality and discretion
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert team of specialists
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Secure Your Wealth Legacy</h2>
        <p className="text-gray-700 mb-4">
          Our private wealth experts provide sophisticated tax planning solutions to help preserve and grow your wealth across generations.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};

export default PrivateWealthPage;
