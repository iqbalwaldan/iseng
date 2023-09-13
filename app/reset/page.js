"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    url: "/assets/images/chat-image.png",
    span: "Simplify 1",
    text: "Social Media Strategy with Sharein 1",
  },
  {
    url: "/assets/images/calendar-image.png",
    span: "One easy",
    text: "step to make your business more known",
  },
  {
    url: "/assets/images/frame-image.png",
    span: "Simplify 3",
    text: "Social Media Strategy with Sharein 3",
  },
  {
    url: "/assets/images/analytics-image.png",
    span: "Simplify 4",
    text: "Social Media Strategy with Sharein 4",
  },
];

export default function Reset() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const renderDots = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className={`w-4 h-4 rounded-full border mx-2 cursor-pointer ${
          slideIndex === currentIndex ? "bg-white border-[1px]" : ""
        }`}
      ></div>
    ));
  };

  const renderImages = () => {
    return slides.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        className={`mx-auto ${
          slideIndex === currentIndex ? "block" : "hidden"
        }`}
      >
        <Image
          src={slide.url}
          alt={`Slide ${slideIndex}`}
          width={500}
          height={500}
        />
      </div>
    ));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-register-left w-full mx-auto py-7 md:p-20 bg-[url('/assets/images/Register-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full bg-blue-500 bg-opacity-30 backdrop-blur-lg rounded-2xl border-[6px] border-[#5882C1] border-opacity-50">
          <div className="flex flex-col">
            <div className="mx-auto">{renderImages()}</div>
            <p className="text-center font-extrabold text-5xl text-white px-14">
              <span className="font-extrabold text-5xl text-[#F7B217]">
                {slides[currentIndex].span}{" "}
              </span>
              {slides[currentIndex].text}
            </p>
            <div className="flex mx-auto mt-20 mb-6">{renderDots()}</div>
          </div>
        </div>
      </div>
      <div className="md:w-register-right w-full h-full">
        <div className="bg-white p-6 md:px-32 md:py-40">
          <div className="w-16 h-16 bg-gradient-to-b from-primary-base to-secondary-base rounded-lg flex items-center justify-center mb-6">
            <Image src="/assets/images/logo-white.png" width={50} height={50} />
          </div>
          <h1 className="font-bold text-4xl text-neutral-80 mb-4">
            Reset Password
          </h1>
          <p className="text-base font-light text-neutral-70">
            Please enter your new password{" "}
          </p>
          <div className=" w-[436px] flex flex-col mt-6">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">New Password</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <div className="flex">
              <input
                className="border border-[#CFCFCF] p-5 text-neutral-70 focus:outline-none flex-grow h-12 rounded-r-md text-base font-light"
                type="password"
                placeholder="your new password"
              />
            </div>
          </div>
          <div className=" w-[436px] flex flex-col mt-6">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">Password Confirmation</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <div className="flex">
              <input
                className="border border-[#CFCFCF] p-5 text-neutral-70 focus:outline-none flex-grow h-12 rounded-r-md text-base font-light"
                type="password"
                placeholder="password confirmation"
              />
            </div>
          </div>
          <div className="pb-96">
            <button className="bg-[#2652FF] w-full h-[51px] mt-10 rounded-md py-2 px-4 text-xl font-semibold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
