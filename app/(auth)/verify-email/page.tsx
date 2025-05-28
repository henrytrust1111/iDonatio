import React from "react";
import Image from "next/image";

const VerifyEmail: React.FC = () => {
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
      <div className="z-10 bg-white rounded-[10px] p-8 w-full max-w-md mx-4">
        <h1 className="text-2xl font-bold text-black text-center mb-2">
          Verify your account
        </h1>
        <p className="text-center text-sm text-[#425A70] mb-6">
          We have sent a verification message to your email address. Click the
          link in the message to verify your email or enter the 6-digit code we
          sent you below.
        </p>

        <form className="space-y-4">
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
                className="block w-full px-3 py-2 border border-[#D0D5DD] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-input focus:border-transparent"
              />
            </div>
            <div className="text-primary text-sm hover:underline mt-3">
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

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-[6px] hover:bg-blue-700 transition-colors"
          >
            Verify code
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
