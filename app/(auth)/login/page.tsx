"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Form Section */}
      <div className="p-10 flex flex-col items-center md:justify-between gap-9 w-full">
        {/* Logo and Signup Link */}
        <div className="flex items-center justify-between w-full">
          <Image
            src="/logo.png"
            alt="iDonatioLogo"
            width={120}
            height={120}
            priority
          />
          <Link
            href="/signup"
            className="text-primary font-semibold text-xs hover:underline"
          >
            <span className="text-[#8E8E93] mr-[2px]">New User?</span>
            Sign up{" "}
            <Image
              src="/get-started/arrow-left.svg"
              alt="iDonatio logo"
              width={6}
              height={9}
              className="object-contain inline-block align-middle ml-1"
            />
          </Link>
        </div>

        <div className="w-full">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-6 w-full">Log in</h1>

          {/* Form */}
          <form className="space-y-6 w-full">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-input"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  className="w-full px-4 py-2 border border-[#D0D5DD] rounded-[8px] pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-input"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2">Remember Me</span>
              </label>
              <Link href="#" className="text-sm text-blue-600">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled
              className="w-full md:w-auto py-2 px-11 bg-[#D1D1D6] text-white font-medium rounded-[6px] flex justify-center items-center cursor-not-allowed opacity-50 mx-auto md:ml-auto md:mr-0"
            >
              Log in{" "}
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

export default Login;
