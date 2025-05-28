"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EBF6FB] relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D1FFEA] rounded-full opacity-30" />
      <div className="absolute bottom-[-200px]  w-80 h-80 bg-[#D1FFEA] rounded-full opacity-30" />
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-[#D1FFEA] rounded-full opacity-30" />
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Donatio Logo"
          width={150}
          height={50}
          priority
        />
      </div>
      {/* Main Form Container */}
      <div className="z-10 bg-white rounded-[10px] p-3 md:p-11 w-full max-w-md mx-4">
        <h1 className="text-2xl font-bold text-black text-center mb-2">
          Reset Password
        </h1>

        <form className="space-y-4 mt-4">
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
                placeholder="Password"
                className="w-full px-4 py-2 border border-[#D0D5DD] rounded-[8px] pr-10 focus:outline-none focus:ring-2 focus:ring-[#31A14D] shadow-input"
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

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-[6px] hover:bg-blue-700 transition-colors"
          >
            Change password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
