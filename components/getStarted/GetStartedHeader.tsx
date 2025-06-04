import Image from "next/image";
import React from "react";
import { BiMenu } from "react-icons/bi";

const GetStartedHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-40">
      <Image
        src="/logo2.png"
        alt="iDonatio logo"
        width={140}
        height={48}
        className="object-contain"
      />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-white border border-[#E6E9E8] rounded-full px-3 py-1">
          <span className="h-8 w-8 flex items-center justify-center rounded-full bg-[#C4C4C4] text-gray-700 font-medium">
            TS
          </span>
          <div className="flex flex-col leading-tight gap-1">
            <span className="text-sm font-semibold text-black">
              Tosin sosan
            </span>
            <span className="text-[10px] text-[#00A846] font-semibold bg-[#C2FFDB] px-2 py-0.5 rounded-[4px]">
              Super admin
            </span>
          </div>
          <button
            aria-label="Menu"
            className="rounded-lg hover:bg-gray-100 transition-colors"
          >
            <BiMenu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default GetStartedHeader;
