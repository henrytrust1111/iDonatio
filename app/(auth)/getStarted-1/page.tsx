"use client";

import React, { useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next-nprogress-bar";

const GetStarted: FC = () => {
  const [choice, setChoice] = useState<"charity" | "donee" | null>(null);
  const router = useRouter();

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <div className="px-8 py-12 flex flex-col justify-start max-w-2xl mx-auto w-full !z-50 bg-white overflow-auto no-scrollbar">
        {/* Logo & Login Link */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <Image
            src="/logo.png"
            alt="iDonatio logo"
            width={140}
            height={48}
            className="object-contain"
          />
          <Link
            href="/login"
            className="text-primary font-semibold text-xs underline"
          >
            <span className="text-[#8E8E93] mr-[2px]">
              Already have an account?{" "}
            </span>
            Log in{" "}
            <Image
              src="/get-started/arrow-left.svg"
              alt="iDonatio logo"
              width={6}
              height={9}
              className="object-contain inline-block align-middle ml-1"
            />
          </Link>
        </div>

        {/* Back & Progress */}
        <div className="mb-6 space-y-2">
          <div className="flex justify-between items-center">
            <button
              onClick={() => window.history.back()}
              className="p-2 bg-gray-100 rounded-[10px] hover:bg-gray-200 transition-colors"
            >
              <BiArrowBack size={20} className="text-black" />
            </button>
            <p className="text-sm font-semibold text-gray-700">1/3</p>
          </div>
          <div className="flex-1 flex items-center space-x-2">
            <div className="flex-1 h-2 bg-primary rounded-full" />
            <div className="flex-1 h-2 bg-gray-200 rounded-full" />
            <div className="flex-1 h-2 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-black mb-2">
          Let’s Get You Started!
        </h1>
        <p className="text-sm text-[#8E8E93] mb-10">
          Choose how you’d like to receive support on iDonatio.
        </p>

        {/* Choice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* Registered Charity */}
          <button
            type="button"
            onClick={() => setChoice("charity")}
            className={`relative p-6 bg-white border border-[#E5E5EA] rounded-xl flex flex-col space-y-4 transition-shadow hover:shadow-md ${
              choice === "charity"
                ? "border-blue-600 shadow-lg"
                : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 w-14 h-14 bg-[#EBF2FF] rounded-full">
                <Image
                  src="/get-started/charity.svg"
                  alt="getStarted logo"
                  width={25}
                  height={36}
                  className="object-contain mx-auto"
                />
              </div>
              {/* <div
                className={`w-5 h-5 border-2 rounded-full ${
                  choice === "charity"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300"
                }`}
              /> */}
              <div
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
  ${choice === "charity" ? "border-blue-600 bg-blue-600" : "border-gray-300"}`}
              >
                {choice === "charity" && (
                  <Image
                    src="/get-started/checker.svg"
                    alt="iDonatio logo"
                    width={10}
                    height={7}
                    className="object-contain"
                  />
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Registered Charity
              </h2>
              <p className="text-sm text-gray-500">
                Choose this if you’re setting up an account for a charity or
                non‑profit.
              </p>
            </div>
          </button>

          {/* Individual Donee */}
          <button
            type="button"
            onClick={() => setChoice("donee")}
            className={`relative p-6 bg-white border border-[#E5E5EA] rounded-xl flex flex-col space-y-4 transition-shadow hover:shadow-md ${
              choice === "donee"
                ? "border-blue-600 shadow-lg"
                : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="w-[58px] h-[58px] rounded-full">
                <Image
                  src="/get-started/frame.svg"
                  alt="getStarted logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              {/* <div
                className={`w-5 h-5 border-2 rounded-full ${
                  choice === "donee"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300"
                }`}
              /> */}
              <div
                className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
  ${choice === "donee" ? "border-blue-600 bg-blue-600" : "border-gray-300"}`}
              >
                {choice === "donee" && (
                  <Image
                    src="/get-started/checker.svg"
                    alt="iDonatio logo"
                    width={10}
                    height={7}
                    className="object-contain"
                  />
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Individual Donee
              </h2>
              <p className="text-sm text-gray-500">
                Choose this if you’re setting up an account to receive personal
                support.
              </p>
            </div>
          </button>
        </div>

        {/* Continue Button */}
        <button
          type="button"
          disabled={!choice}
          onClick={() => {
            if (choice) {
              router.push("/getStarted-2");
            }
          }}
          className={`w-full md:w-auto py-2 px-11 bg-[#D1D1D6] text-white font-medium rounded-[6px] flex justify-center items-center cursor-not-allowed mx-auto md:ml-auto md:mr-0 transition-opacity ${
            choice
              ? "bg-primary text-white hover:bg-blue-700 cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          Continue{" "}
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

      {/* Right Image/Illustration Section */}
      <div className="hidden md:block relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-50 -z-20" />
        <Image
          src="/login/images/dashboard-illustration.png"
          alt="Dashboard preview"
          fill
          className="object-cover opacity-80 bounce-corners"
        />
      </div>
    </div>
  );
};

export default GetStarted;
