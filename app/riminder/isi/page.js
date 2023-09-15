import React from "react";

export default function ISI() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md">
        <div className="mb-6">
          <div className="flex mb-1">
            <p className="font-normal text-base text-neutral-70">input label</p>
            <p className="font-normal text-base text-error-base">*</p>
          </div>
          <input
            className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
            type="text"
            placeholder="input placeholder"
          />
        </div>
        <div className="md:flex md:flex-row md:justify-between">
        <div className="flex flex-col mt-6">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">Phone Number</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <div className="flex">
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-20 h-12 rounded-l-md text-base font-light"
                type="text"
                placeholder="+62"
              />
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none flex-grow h-12 rounded-r-md text-base font-light"
                type="text"
                placeholder="your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 ml-4">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">Email</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <div className="flex">
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none flex-grow h-12 rounded-r-md text-base font-light"
                type="text"
                placeholder="your phone number"
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-between">
          <div className="flex flex-col mt-6">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">
                First Name
              </p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
              type="text"
              placeholder="Your first name"
            />
          </div>
          <div className="flex flex-col mt-6 ml-4">
            {" "}
            {/* Added ml-4 for left margin */}
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">Last Name</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
              type="text"
              placeholder="Your last name"
            />
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-between">
          <div className="flex flex-col mt-6 ml-60">
            {" "}
            {/* Added ml-4 for left margin */}
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
              type="text"
              placeholder="Your last name"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
