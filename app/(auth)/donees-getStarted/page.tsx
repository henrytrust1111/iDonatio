`use client`;
import React, { FC } from "react";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

const steps = [
  {
    title: "Organization Profile",
    description: "Set your name, logo, registration number, and referees"
  },
  {
    title: "Structure (Optional)",
    description: "Define regions, branches, and units if your org is large"
  },
  {
    title: "Donation Types",
    description: "Create categories like Tithes, Offering, Building Fund"
  },
  {
    title: "Connect Paystack",
    description: "Securely connect to start receiving online donations"
  }
];

const WelcomePage: FC = () => {
  return (
    <div className="max-h-screen bg-gray-50 flex flex-col overflow-auto no-scrollbar pb-12">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-10">
        <Image
          src="/logo2.png"
          alt="iDonatio logo"
          width={140}
          height={48}
          className="object-contain"
        />
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1">
            <span className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-medium">
              TS
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-gray-800">
                Tosin sosan
              </span>
              <span className="text-xs text-green-600 font-semibold">
                Super admin
              </span>
            </div>
          </div>
          <button
            aria-label="Menu"
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <BiMenu size={24} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 mt-11">
        <div className="bg-white rounded-2xl border border-[#E6E9E8] w-full max-w-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-2">
            🎉 Welcome to iDonatio!
          </h1>
          <p className="text-center text-gray-600 mb-6">
            You&apos;re just a few steps away from launching your donation
            management system. Here’s what you’ll be setting up:
          </p>

          {/* Steps List */}
          <div className="divide-y divide-gray-200">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h2>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                <div className="flex-shrink-0 h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaCheck className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 bg-primary text-white text-sm font-medium rounded-[8px] hover:bg-blue-700 transition-colors flex items-center">
              Get Started{" "}
              <span className="ml-2">
                {" "}
                <Image
                  src="/get-started/arrow-white.svg"
                  alt="iDonatio logo"
                  width={12}
                  height={12}
                  className="object-contain inline-block align-middle ml-1"
                />
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;
