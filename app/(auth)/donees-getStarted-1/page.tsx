"use client";
import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import GetStartedHeaderLayout from "@/components/getStarted/GetStartedHeaderLayout";
import Image from "next/image";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const GOOGLE_API_KEY = "AIzaSyDSJLDP8ehodqfX8FEFjhfOyp7NNniFUa4";

const DoneesGetStarted1: React.FC = () => {
  const [orgProfile, setOrgProfile] = useState({
    name: "",
    regNumber: "",
    phone: "",
    type: "",
    address: "",
    email: ""
  });

  // Keeps the raw selection object for the autocomplete control
  const [addressObj, setAddressObj] = useState<any>(null);

  const isFormValid = Object.values(orgProfile).every((value) => value.trim());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrgProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (selection: any) => {
    setAddressObj(selection);
    setOrgProfile((prev) => ({
      ...prev,
      address: selection ? selection.label : ""
    }));
  };

  return (
    <div className="max-h-screen bg-[#FAFAFA] flex flex-col overflow-auto no-scrollbar pb-12">
      <GetStartedHeaderLayout>
        <div className="w-full max-w-4xl mx-auto px-4 py-8 rounded-lg">
          {/* Header & Progress */}
          <div className="sticky top-20 z-30 bg-[#FAFAFA] py-4">
            <div className="mb-6 w-full max-w-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-black">
                  step 1 of 4
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 h-2 bg-blue-600 rounded-full" />
                <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
                <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
                <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
              </div>
              <div className="space-y-1 mt-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Set Up Your Organization Profile
                </h2>
                <p className="text-sm text-gray-500">
                  Tell us about your organization to help you get started.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Form grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Logo upload */}
              <div className="flex flex-col items-center justify-center rounded-lg order-1 lg:order-2">
                <div className="bg-blue-50 w-[133px] h-[133px] flex items-center justify-center rounded-full">
                  <Image
                    src="/Ribbon.png"
                    alt="Upload Logo"
                    width={50}
                    height={70}
                  />
                </div>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-[#D0D5DD] text-[#425A70] font-medium text-sm rounded-[8px] hover:bg-gray-100 transition">
                  <Image
                    src="/get-started/upload.svg"
                    alt="upload"
                    width={16}
                    height={14}
                    className="mr-1"
                  />
                  Upload Logo
                </button>
              </div>

              {/* Inputs */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
                {/* Organization Name */}
                <div className="relative mt-1">
                  <input
                    name="name"
                    value={orgProfile.name}
                    onChange={handleChange}
                    placeholder="Organization Name"
                    className="authInput"
                  />
                  {!orgProfile.name && (
                    <AiOutlineInfoCircle
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  )}
                </div>
                {/* <input
                  name="name"
                  value={orgProfile.name}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  className="authInput"
                /> */}

                <div className="relative mt-1">
                  <select
                    name="type"
                    value={orgProfile.type}
                    onChange={handleChange}
                    className="authInput appearance-none"
                  >
                    <option value="" disabled hidden>
                      Select type
                    </option>
                    <option value="church">Church</option>
                    <option value="ngo">NGO</option>
                    <option value="foundation">Foundation</option>
                    <option value="other">Other</option>
                  </select>
                  <BiChevronDown
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>

                <div>
                  <input
                    name="regNumber"
                    value={orgProfile.regNumber}
                    onChange={handleChange}
                    placeholder="Registration Number"
                    className="authInput"
                  />
                </div>

                {/* ←— Replaced Combobox with react-google-places-autocomplete */}
                <div className="mt-1 ">
                  <GooglePlacesAutocomplete
                    apiKey={GOOGLE_API_KEY}
                    selectProps={{
                      value: addressObj,
                      onChange: handleAddressChange,
                      placeholder: "Search for address",
                      className: "",
                      classNamePrefix: "react-select"
                    }}
                  />
                </div>

                {/* phoneNumber */}
                <div>
                  <input
                    name="phone"
                    value={orgProfile.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="authInput"
                  />
                </div>

                {/* Email */}
                <div className="">
                  <input
                    name="email"
                    value={orgProfile.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="authInput"
                  />
                </div>
              </div>
            </div>

            {/* Verification Documents */}
            <div className="space-y-2 w-full max-w-xl">
              <div className="flex items-center space-x-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  Upload Verification Document(s)
                </h3>
                <div className="relative group">
                  <AiOutlineInfoCircle
                    size={16}
                    className="text-gray-400 cursor-pointer"
                  />
                  <div className="absolute left-1/2 -top-28 z-40 w-64 -translate-x-1/2 rounded bg-[#1f1e1e] px-3 py-2 text-xs text-[#d9d8d8] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="font-semibold mb-1">Upload Guidelines</div>
                    <ul className="list-disc pl-4">
                      <li>Max files: 2</li>
                      <li>PDF, PNG, JPEG only</li>
                      <li>Max size: 5MB each</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Required: CAC Certificate or NGO License
              </p>
              <div className="mt-2 flex space-x-4">
                <div className="flex-1 relative border border-gray-300 rounded-[8px] p-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <IoDocumentTextOutline className="w-4 h-5 mr-1" />
                    Drag and drop a file here
                  </span>
                  <button className="text-blue-600 bg-[#ECF5FF] h-full border-l border-[#D0D5DD] rounded-[5px] font-medium px-4 absolute right-0 top-1/2 -translate-y-1/2">
                    select a file
                  </button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Describe the uploaded document"
                className="authInput"
              />
              <button className="text-[#407BF1] font-semibold text-sm mt-1 flex items-center hover:underline">
                <MdOutlineAdd className="w-5 h-5 mr-1" />
                Add Another Document
              </button>
            </div>

            {/* Referees */}
            <div className="space-y-2 w-full max-w-xl">
              <div className="flex items-center space-x-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  Referees
                </h3>
                <div className="relative group">
                  <AiOutlineInfoCircle
                    size={16}
                    className="text-gray-400 cursor-pointer"
                  />
                  <div className="absolute left-36 -top-16 z-40 mt-2 w-[360px] -translate-x-1/2 rounded bg-[#1f1e1e] px-3 py-2 text-xs text-[#d9d8d8] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-center">
                      Referees help us verify that your organization is
                      legitimate. We will never contact them without your
                      permission.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">
                      Referee {i}
                    </h4>
                    <input placeholder="Full name" className="authInput" />
                    <input placeholder="Phone Number" className="authInput" />
                    <input placeholder="Email Address" className="authInput" />
                    <input
                      placeholder="National Identification Number"
                      className="authInput"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Continue */}
            <div className="flex justify-end w-full max-w-xl">
              <button
                type="button"
                disabled={!isFormValid}
                className={`w-full md:w-auto py-2 px-4 font-medium rounded-[6px] flex justify-center items-center transition-opacity ${
                  isFormValid
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-[#D1D1D6] text-white cursor-not-allowed"
                }`}
              >
                Continue
                <Image
                  src="/get-started/arrow-white.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </GetStartedHeaderLayout>
    </div>
  );
};

export default DoneesGetStarted1;





































// "use client";
// import React, { useState } from "react";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { MdOutlineAdd } from "react-icons/md";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { BiChevronDown } from "react-icons/bi";
// import GetStartedHeaderLayout from "@/components/getStarted/GetStartedHeaderLayout";
// import Image from "next/image";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";

// const GOOGLE_API_KEY = "AIzaSyDSJLDP8ehodqfX8FEFjhfOyp7NNniFUa4";

// const DoneesGetStarted1: React.FC = () => {
//   const [orgProfile, setOrgProfile] = useState({
//     name: "",
//     regNumber: "",
//     phone: "",
//     type: "",
//     address: "",
//     email: ""
//   });

//   // Keeps the raw selection object for the autocomplete control
//   const [addressObj, setAddressObj] = useState<any>(null);

//   const isFormValid = Object.values(orgProfile).every((value) => value.trim());

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setOrgProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddressChange = (selection: any) => {
//     setAddressObj(selection);
//     setOrgProfile((prev) => ({
//       ...prev,
//       address: selection ? selection.label : ""
//     }));
//   };

//   return (
//     <div className="max-h-screen bg-[#FAFAFA] flex flex-col overflow-auto no-scrollbar pb-12">
//       <GetStartedHeaderLayout>
//         <div className="w-full max-w-4xl mx-auto px-4 py-8 rounded-lg">
//           {/* Header & Progress */}
//           <div className="sticky top-20 z-30 bg-[#FAFAFA] py-4">
//             <div className="mb-6 w-full max-w-xl">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm font-medium text-black">
//                   step 1 of 4
//                 </span>
//               </div>
//               <div className="flex space-x-2">
//                 <div className="flex-1 h-2 bg-blue-600 rounded-full" />
//                 <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
//                 <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
//                 <div className="flex-1 h-2 bg-[#F2F2F4] rounded-full" />
//               </div>
//               <div className="space-y-1 mt-6">
//                 <h2 className="text-2xl font-semibold text-gray-900">
//                   Set Up Your Organization Profile
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   Tell us about your organization to help you get started.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-8">
//             {/* Form grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Logo upload */}
//               <div className="flex flex-col items-center justify-center rounded-lg order-1 lg:order-2">
//                 <div className="bg-blue-50 w-[133px] h-[133px] flex items-center justify-center rounded-full">
//                   <Image
//                     src="/Ribbon.png"
//                     alt="Upload Logo"
//                     width={50}
//                     height={70}
//                   />
//                 </div>
//                 <button className="mt-4 inline-flex items-center px-4 py-2 border border-[#D0D5DD] text-[#425A70] font-medium text-sm rounded-[8px] hover:bg-gray-100 transition">
//                   <Image
//                     src="/get-started/upload.svg"
//                     alt="upload"
//                     width={16}
//                     height={14}
//                     className="mr-1"
//                   />
//                   Upload Logo
//                 </button>
//               </div>

//               {/* Inputs */}
//               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
//                 {/* Organization Name */}
//                 <div className="relative mt-1">
//                   <input
//                     name="name"
//                     value={orgProfile.name}
//                     onChange={handleChange}
//                     placeholder="Organization Name"
//                     className="authInput"
//                   />
//                   {!orgProfile.name && (
//                     <AiOutlineInfoCircle
//                       className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
//                       size={18}
//                     />
//                   )}
//                 </div>
//                 {/* <input
//                   name="name"
//                   value={orgProfile.name}
//                   onChange={handleChange}
//                   placeholder="Organization Name"
//                   className="authInput"
//                 /> */}

//                 <div className="relative mt-1">
//                   <select
//                     name="type"
//                     value={orgProfile.type}
//                     onChange={handleChange}
//                     className="authInput appearance-none"
//                   >
//                     <option value="" disabled hidden>
//                       Select type
//                     </option>
//                     <option value="church">Church</option>
//                     <option value="ngo">NGO</option>
//                     <option value="foundation">Foundation</option>
//                     <option value="other">Other</option>
//                   </select>
//                   <BiChevronDown
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
//                     size={20}
//                   />
//                 </div>

//                 <div>
//                   <input
//                     name="regNumber"
//                     value={orgProfile.regNumber}
//                     onChange={handleChange}
//                     placeholder="Registration Number"
//                     className="authInput"
//                   />
//                 </div>

//                 {/* ←— Replaced Combobox with react-google-places-autocomplete */}
//                 <div className="mt-1 ">
//                   <GooglePlacesAutocomplete
//                     apiKey={GOOGLE_API_KEY}
//                     selectProps={{
//                       value: addressObj,
//                       onChange: handleAddressChange,
//                       placeholder: "Search for address",
//                       className: "",
//                       classNamePrefix: "react-select"
//                     }}
//                   />
//                 </div>

//                 {/* phoneNumber */}
//                 <div>
//                   <input
//                     name="phone"
//                     value={orgProfile.phone}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     className="authInput"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="">
//                   <input
//                     name="email"
//                     value={orgProfile.email}
//                     onChange={handleChange}
//                     placeholder="Email Address"
//                     className="authInput"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Verification Documents */}
//             <div className="space-y-2 w-full max-w-xl">
//               <div className="flex items-center space-x-1">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Upload Verification Document(s)
//                 </h3>
//                 <div className="relative group">
//                   <AiOutlineInfoCircle
//                     size={16}
//                     className="text-gray-400 cursor-pointer"
//                   />
//                   <div className="absolute left-1/2 -top-28 z-40 w-64 -translate-x-1/2 rounded bg-[#1f1e1e] px-3 py-2 text-xs text-[#d9d8d8] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                     <div className="font-semibold mb-1">Upload Guidelines</div>
//                     <ul className="list-disc pl-4">
//                       <li>Max files: 2</li>
//                       <li>PDF, PNG, JPEG only</li>
//                       <li>Max size: 5MB each</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-500">
//                 Required: CAC Certificate or NGO License
//               </p>
//               <div className="mt-2 flex space-x-4">
//                 <div className="flex-1 relative border border-gray-300 rounded-[8px] p-3 flex items-center justify-between">
//                   <span className="text-sm text-gray-500 flex items-center">
//                     <IoDocumentTextOutline className="w-4 h-5 mr-1" />
//                     Drag and drop a file here
//                   </span>
//                   <button className="text-blue-600 bg-[#ECF5FF] h-full border-l border-[#D0D5DD] rounded-[5px] font-medium px-4 absolute right-0 top-1/2 -translate-y-1/2">
//                     select a file
//                   </button>
//                 </div>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Describe the uploaded document"
//                 className="authInput"
//               />
//               <button className="text-[#407BF1] font-semibold text-sm mt-1 flex items-center hover:underline">
//                 <MdOutlineAdd className="w-5 h-5 mr-1" />
//                 Add Another Document
//               </button>
//             </div>

//             {/* Referees */}
//             <div className="space-y-2 w-full max-w-xl">
//               <div className="flex items-center space-x-1">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Referees
//                 </h3>
//                 <div className="relative group">
//                   <AiOutlineInfoCircle
//                     size={16}
//                     className="text-gray-400 cursor-pointer"
//                   />
//                   <div className="absolute left-36 -top-16 z-40 mt-2 w-[360px] -translate-x-1/2 rounded bg-[#1f1e1e] px-3 py-2 text-xs text-[#d9d8d8] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                     <p className="text-center">
//                       Referees help us verify that your organization is
//                       legitimate. We will never contact them without your
//                       permission.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[1, 2].map((i) => (
//                   <div key={i} className="space-y-3">
//                     <h4 className="text-sm font-medium text-gray-700">
//                       Referee {i}
//                     </h4>
//                     <input placeholder="Full name" className="authInput" />
//                     <input placeholder="Phone Number" className="authInput" />
//                     <input placeholder="Email Address" className="authInput" />
//                     <input
//                       placeholder="National Identification Number"
//                       className="authInput"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Continue */}
//             <div className="flex justify-end w-full max-w-xl">
//               <button
//                 type="button"
//                 disabled={!isFormValid}
//                 className={`w-full md:w-auto py-2 px-4 font-medium rounded-[6px] flex justify-center items-center transition-opacity ${
//                   isFormValid
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "bg-[#D1D1D6] text-white cursor-not-allowed"
//                 }`}
//               >
//                 Continue
//                 <Image
//                   src="/get-started/arrow-white.svg"
//                   alt="arrow"
//                   width={12}
//                   height={12}
//                   className="ml-2"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </GetStartedHeaderLayout>
//     </div>
//   );
// };

// export default DoneesGetStarted1;







