import React from 'react';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';

const ForgotPass: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200 rounded-full opacity-30" />
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-green-100 rounded-full opacity-30" />

      <div className="z-10 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-4">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/donatio-logo.png"
            alt="Donatio Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Forgot Password
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your registered email address below to receive instructions on how to reset your password.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <AiOutlineMail size={20} />
              </span>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Send verification code
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
