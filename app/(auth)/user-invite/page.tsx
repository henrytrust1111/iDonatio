"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCheckCircle
} from "react-icons/ai";

const UserInvite: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Form Section */}
      <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Donatio Logo"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Success alert */}
        <div className="w-full max-w-sm flex items-center border border-[#B4FBC6] bg-[#E2FFEC] text-[#425A70] text-sm rounded-[4px] p-4 mb-8">
          <AiOutlineCheckCircle size={34} className="mr-2" color="#34C759" />
          <p>
            You have been verified as the owner of this user account, please
            create a password to proceed
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 w-full max-w-xl">
          {/* Email read-only */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value="jordan@mail.com"
              readOnly
              className="w-full px-4 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-input"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                // className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full px-4 py-2 border border-[#D0D5DD] rounded-[8px] pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-input"
                // className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled
            className="w-full md:w-auto py-2 px-11 bg-[#D1D1D6] text-white font-medium rounded-[6px] flex justify-center items-center cursor-not-allowed opacity-50 mx-auto md:ml-auto md:mr-0"
          >
            Create password
          </button>
        </form>
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

export default UserInvite;
