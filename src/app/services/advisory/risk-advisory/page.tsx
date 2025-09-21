import React from 'react';

const RiskAdvisoryPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Risk Advisory</h1>
        <p className="text-xl text-gray-600">
          Comprehensive risk management advisory services to help you identify, assess, and mitigate risks while protecting and enhancing your business value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Risk Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk assessment and identification
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Internal controls evaluation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Compliance risk management
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Operational risk analysis
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cybersecurity risk assessment
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Risk mitigation strategies
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Enhanced business resilience
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost reduction
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Improved decision-making
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Stakeholder confidence
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Competitive advantage
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Strengthen Your Risk Management</h2>
        <p className="text-gray-700 mb-4">
          Our risk advisory experts help you build robust risk management frameworks that protect your business and enable sustainable growth.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default RiskAdvisoryPage;
