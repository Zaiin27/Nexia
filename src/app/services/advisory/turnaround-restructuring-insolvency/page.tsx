import React from 'react';

const TurnaroundRestructuringInsolvencyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Turnaround Restructuring Insolvency</h1>
        <p className="text-xl text-gray-600">
          Specialized advisory services for business turnaround, restructuring, and insolvency situations to help organizations navigate challenging times and emerge stronger.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Business turnaround planning
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Financial restructuring
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Operational restructuring
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Insolvency administration
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Creditor negotiations
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Asset recovery and disposal
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Why Choose Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert crisis management
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Proven track record
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Stakeholder protection
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Value preservation
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Regulatory compliance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Objective guidance
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Navigate Business Challenges</h2>
        <p className="text-gray-700 mb-4">
          Our turnaround and restructuring experts provide objective, professional guidance to help businesses overcome financial difficulties and achieve sustainable recovery.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TurnaroundRestructuringInsolvencyPage;
