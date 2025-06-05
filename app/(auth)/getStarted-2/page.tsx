"use client";
import React, { useState, FC, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCheck
} from "react-icons/ai";
import Select from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";

const GetStarted2: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [country, setCountry] = useState<{
    value: string;
    label: React.ReactNode;
  } | null>(null);
  const [postalCode, setPostalCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const countryOptions = useMemo(
    () =>
      countryList()
        .getData()
        .map((c) => ({
          value: c.value,
          label: (
            <div className="flex items-center">
              <ReactCountryFlag
                countryCode={c.value}
                svg
                style={{ width: "1.5em", height: "1.1em" }}
              />
              <span className="ml-2">{c.label}</span>
            </div>
          )
        })),
    []
  );

  const checks = {
    length: password.length >= 8,
    number: /\d/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    uppercase: /[A-Z]/.test(password)
  };

  const isFormValid =
    firstName &&
    lastName &&
    email &&
    idNumber &&
    country &&
    postalCode &&
    Object.values(checks).every(Boolean) &&
    password === confirmPassword;

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="px-8 overflow-auto bg-white no-scrollbar">
        <div className="max-w-lg mx-auto">
          {/* Logo and Login */}
          <div className="flex items-center justify-between mb-8 bg-white z-20 sticky top-0 pt-12 pb-4 gap-4">
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
              <span className="text-sm font-medium text-gray-700">2/3</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex-1 h-2 bg-blue-600 rounded-full" />
              <div className="flex-1 h-2 bg-blue-600 rounded-full" />
              <div className="flex-1 h-2 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Set Up Your Account
          </h1>
          <p className="text-base text-gray-500 mb-8">
            Provide your name, contact details, and set a password to get
            started.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ... first & last name inputs unchanged ... */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="authInput"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="authInput"
                />
              </div>
            </div>
            {/* Email & ID unchanged ... */}
            {/* Email */}
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
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="authInput"
              />
            </div>

            {/* National ID */}
            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                National Identification Number
              </label>
              <input
                id="idNumber"
                type="text"
                placeholder="76976966969"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="authInput"
              />
            </div>
            {/* Country & Postal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country*
                </label>
                <Select
                  id="country"
                  options={countryOptions}
                  value={country}
                  onChange={setCountry}
                  placeholder="Select"
                  styles={{
                    control: (provided) => ({ ...provided, maxHeight: "3rem" })
                  }}
                />
              </div>
              {/* Postal code */}
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Postal code*
                </label>
                <input
                  id="postalCode"
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="authInput"
                />
              </div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="authInputPassword"
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
              {/* label & input ... */}
              {password.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm">
                  {Object.entries(checks).map(([key, valid]) => (
                    <li key={key} className="flex items-center">
                      <AiOutlineCheck
                        className={valid ? "text-green-500" : "text-gray-300"}
                      />
                      <span className="ml-2 capitalize">
                        {key === "length" ? "8 characters" : key}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Confirm Password ... */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="authInputPassword"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                  <AiOutlineEye size={20} />
                </span>
              </div>
            </div>

            {/* Navigation Buttons unchanged ... */}
            <div className="flex items-center justify-between mt-8 bg-white sticky bottom-0 z-20 pt-4 pb-12 px-1 border-t">
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
                disabled={!isFormValid}
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

export default GetStarted2;
