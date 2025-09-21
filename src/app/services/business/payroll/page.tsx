import React from 'react';

const PayrollPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Payroll Services</h1>
        <p className="text-xl text-gray-600">
          Complete payroll management services to ensure accurate and timely employee compensation while maintaining compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Salary and wage processing
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax calculations and deductions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Benefits administration
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Payroll reporting
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Year-end tax forms
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Direct deposit setup
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-teal-600 mb-4">Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Accurate and timely payments
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Tax compliance assurance
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Reduced administrative burden
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Employee satisfaction
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Cost-effective solutions
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2">•</span>
              Expert support and guidance
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Streamline Your Payroll</h2>
        <p className="text-gray-700 mb-4">
          Let our payroll experts handle all aspects of employee compensation so you can focus on running your business.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PayrollPage;
