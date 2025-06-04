`use client`;
import React, { FC } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import GetStartedHeaderLayout from "@/components/getStarted/GetStartedHeaderLayout";

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
    <div className="max-h-screen bg-[#FAFAFA] flex flex-col overflow-auto no-scrollbar pb-12">
      <GetStartedHeaderLayout>
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 mt-11">
          <div className="bg-white rounded-2xl border border-[#E6E9E8] w-full max-w-lg p-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-2">
              🎉 Welcome to iDonatio!
            </h1>
            <p className="text-center text-gray-600 mb-6">
              You&apos;re just a few steps away from launching your donation
              management system. Here&apos;s what you&apos;ll be setting up:
            </p>

            {/* Steps List */}
            <div className="divide-y divide-gray-200">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-[#0F202F]">
                      {step.title}
                    </h2>
                    <p className="text-sm text-black">{step.description}</p>
                  </div>
                  <div className="flex-shrink-0 h-8 w-8 bg-[#D9D9D9] rounded-full flex items-center justify-center">
                    <FaCheck className="text-[#989898]" />
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
      </GetStartedHeaderLayout>
    </div>
  );
};

export default WelcomePage;
