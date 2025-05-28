"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";


const GetStarted3: FC = () => {


  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="px-8 overflow-auto bg-white no-scrollbar">
        <div className="max-w-lg mx-auto">
          {/* Logo and Login */}
          <div className="flex items-center justify-between mb-8 bg-white z-20 sticky top-0 pt-12 pb-4">
            <Image
              src="/logo.png"
              alt="iDonatio Logo"
              width={140}
              height={40}
              priority
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
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() => history.back()}
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <BiArrowBack size={20} />
              </button>
              <span className="text-sm font-medium text-gray-700">3/3</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex-1 h-2 bg-blue-600 rounded-full" />
              <div className="flex-1 h-2 bg-blue-600 rounded-full" />
              <div className="flex-1 h-2 bg-blue-600 rounded-full" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Check Your Email
          </h1>
          <p className="text-base text-gray-500 mb-8">
            We&apos;ve sent a 6-digit code to your email. Enter it below to
            continue.
          </p>

          {/* Form */}
          <form className="space-y-2">
            <div>
              <label
                htmlFor="otpCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter Code
              </label>
              <div className="relative">
                <input
                  id="otp"
                  type="otp code"
                  placeholder=""
                  className="authInput"
                />
              </div>
              <div className="text-primary text-sm hover:underline mt-3 cursor-pointer">
                <span className="text-[#8E8E93] mr-[2px]">
                  Didn&apos;t get the code?
                </span>
                Resend{" "}
                <Image
                  src="/resend.svg"
                  alt="resend icon"
                  width={11}
                  height={11}
                  className="object-contain inline-block align-middle ml-px"
                />
              </div>
            </div>

            {/* Navigation Buttons unchanged ... */}
            <div className="flex items-center justify-between mt-8 bg-white sticky bottom-0 z-20 pt-4 pb-4 px-1">
              <button
                type="button"
                onClick={() => history.back()}
                className="flex items-center py-2 px-4 text-black text-sm font-medium bg-[#F2F2F7] rounded-[6px]"
              >
                <BiArrowBack size={18} className="mr-1" /> Back
              </button>
              {/* Submit Button */}
              <button
                type="submit"
                disabled
                className="w-full md:w-auto py-2 px-11 bg-[#D1D1D6] text-white font-medium rounded-[6px] flex justify-center items-center cursor-not-allowed opacity-50 mx-auto md:ml-auto md:mr-0"
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
          </form>
        </div>
      </div>

      {/* Right Image/Illustration Section */}
      <div className="hidden md:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-50"></div>
        <Image
          src="/login/images/dashboard-illustration.png"
          alt="Dashboard preview"
          className="opacity-80"
          fill
        />
      </div>
    </div>
  );
};

export default GetStarted3;
