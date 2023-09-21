"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { render } from "react-dom";
import Clock from "react-live-clock";

export default function Reminder() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const Alert = () => {
    Swal.fire({
      icon: "success",
      title: "Successfully Added a Reminder",
      text: "You have successfully add a reminder and we will send you a reminder when the set date arrives",
      confirmButtonText: "Okey",
      confirmButtonColor: "#2652FF",
    });
  };
  const Alert1 = () => {
    Swal.fire({
      icon: "error",
      title: "Failed to Add Reminder",
      text: "Sorry, the reminder failed to add because the date you entered has passed.",
      confirmButtonText: "Try Again",
      confirmButtonColor: "#2652FF",
    });
  };
  function handleImageUpload() {
    const input = document.getElementById("formFileLg");
    const imagePreview = document.getElementById("imagePreview");

    if (input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        imagePreview.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      imagePreview.src = ""; // Clear the image preview if no file is selected
    }
  }

  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);

  const formatValue = (value) => value.toString().padStart(2, "0");

  const handleScroll = (e, inputType) => {
    e.preventDefault();
    const scrollDirection = e.deltaY > 0 ? 1 : -1;

    if (inputType === "time") {
      let newValue = time + scrollDirection;
      if (newValue < 0) newValue = 23;
      if (newValue > 23) newValue = 0;
      setTime(newValue);
    } else if (inputType === "minute") {
      let newValue = minute + scrollDirection;
      if (newValue < 0) newValue = 59;
      if (newValue > 59) newValue = 0;
      setMinute(newValue);
    }
  };
  const beforeTime = formatValue(time > 0 ? time - 1 : 23);
  const afterTime = formatValue(time < 23 ? time + 1 : 0);
  const beforeMinute = formatValue(minute > 0 ? minute - 1 : 59);
  const afterMinute = formatValue(minute < 59 ? minute + 1 : 0);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    setIsScrollEnabled(!isEditMode);
  };

  const countryCodes = ["+62", "+1", "+44", "+81"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+62");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex w-full md:flex-row">
      <div className="flex flex-col w-[69%]">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
            htmlFor="grid-password"
          >
            Input Label
            <span className="font-normal text-base text-error-base">*</span>
          </label>
          <input
            className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
            id="label"
            type="text"
            placeholder="input placeholder"
          />
        </div>

        <div className="md:flex w-full flex-row md:justify-start">
          <div className="w-full px-3 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-password"
            >
              Phone Number
              <span className="font-normal text-base text-error-base">*</span>
            </label>
            <div className="flex items-center relative">
            <input
              onClick={toggleDropdown}
              className="cursor-pointer border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-[23%] h-12 rounded-l-md text-base font-light"
              type="text"
              value={selectedCode}
              readOnly
            />
            {isDropdownOpen && (
              <div className="absolute mt-2 w-[20%] top-9 bg-white border border-[#CFCFCF] shadow-lg rounded-b-md">
                {countryCodes.map((code) => (
                  <div
                    key={code}
                    onClick={() => handleCodeSelect(code)}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                  >
                    {code}
                  </div>
                ))}
              </div>
            )}
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none w-full h-12 rounded-r-md text-base font-light"
              type="text"
              placeholder="your phone number"
            />
            </div>
            
          </div>

          <div className="w-full px-3 mt-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
              htmlFor="grid-password"
            >
              E-mail
              <span className="font-normal text-base text-error-base">*</span>
            </label>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light w-full"
              id="email"
              type="email"
              placeholder="your email"
            />
          </div>
        </div>
        <div className="md:flex w-full flex-row md:justify-between">
          <div className="w-full flex flex-wrap mt-6 mb-6">
            <div className="px-3 w-full">
              <div>
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                  <span className="font-normal text-base text-error-base">
                    *
                  </span>
                </label>
                <textarea
                  class=" appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48"
                  id="message"
                  placeholder="Enter a description"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-full px-3 mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Image
              <span className="font-normal text-base text-error-base">*</span>
            </label>
            <div className="relative appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48">
              <img
                id="imagePreview" // ID to target this image element
                className="absolute -z-50 w-52 h-44" // You can apply additional styling here
                alt="Image Preview"
                src="" // This will be dynamically set
              />
            </div>
            <div className="w-full px-3">
              <input
                className="m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-300 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-300 focus:shadow-te-primary focus:outline-none dark:border-neutral-300 dark:text-neutral-200 dark:file:bg-neutral-300 dark:file:text-neutral-100 dark:focus:border-primary"
                id="formFileLg"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-6">
        <p className="mb-3 font-semibold text-xl text-neutral-80">
          Enter reminder time{" "}
        </p>
        {isEditMode ? (
          <div
            className="mb-4 flex flex-col gap-1 2xl:gap-3 bg-white shadow-lg rounded-lg py-1 2xl:py-2 px-8 cursor-pointer"
            onClick={handleEditClick}
          >
            <div className="flex flex-row px-2 justify-between">
              <div
                className="text-primary-50 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
              >
                {beforeTime}
              </div>
              <div
                className="text-primary-50 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
              >
                {beforeMinute}
              </div>
            </div>
            <div className="flex bg-primary-base flex-row px-2 py-1 2xl:py-2 rounded-[5px] justify-between">
              <div
                className="text-neutral-10 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
              >
                {formatValue(time)}
              </div>
              <div className="text-neutral-10 font-normal text-base">:</div>
              <div
                className="text-neutral-10 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
              >
                {formatValue(minute)}
              </div>
            </div>
            <div className="flex flex-row px-2 justify-between">
              <div
                className="text-primary-50 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "time")}
              >
                {afterTime}
              </div>
              <div
                className="text-primary-50 font-normal text-base"
                onWheel={(e) => isScrollEnabled && handleScroll(e, "minute")}
              >
                {afterMinute}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="md:flex flex-row mb-4 justify-center cursor-pointer"
            onClick={handleEditClick}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold">
                <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                  {formatValue(time)}
                </div>
              </div>
            </div>
            <p className="mx-2 flex items-center text-primary-50 font-bold text-xl">
              :
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold cursor-default">
                <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                  {formatValue(minute)}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col">
          <h1></h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select a date"
            inline // Add the inline prop to display the calendar directly
          />
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4  h-4" />
            <p className="text-sm text-[#646568] mx-3">
              Send reminder every same date
            </p>
          </div>
          <button
            onClick={Alert}
            className="bg-[#2652FF] w-[250px] h-[35px] mt-3 rounded-md py-2 px-4 text-xs font-semibold text-white"
          >
            Save
          </button>
          {/* <button
            onClick={Alert1}
            className="bg-[#2652FF] w-[250px] h-[35px] mt-3 rounded-md py-2 px-4 text-xs font-semibold text-white"
          >
            Failed
          </button> */}
        </div>
      </div>
    </div>
  );
}
