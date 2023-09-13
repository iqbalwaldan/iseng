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

export default function Login() {
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
        className={`w-4 h-4 rounded-full border border-1 mx-2 cursor-pointer ${
          slideIndex === currentIndex ? "bg-white" : ""
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
        <img src={slide.url} alt={`Slide ${slideIndex}`} />
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
      <div className="md:w-register-left w-full mx-auto py-6 md:p-20 bg-[url('/assets/images/Register-bg.png')] bg-cover bg-center bg-no-repeat">
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
      <div className="md:w-register-right w-full h-screen">
        <div className="bg-white p-6 md:px-32 md:py-10">
          <div className="w-16 h-16 bg-gradient-to-b from-primary-base to-secondary-base rounded-lg flex items-center justify-center mb-6">
            <Image src="/assets/images/logo-white.png" width="50" height="50" />
          </div>
          <h1 className="font-bold text-4xl text-neutral-80 mb-4">Sign In</h1>
          <p className="text-base font-light text-neutral-70">
            Welcome back! Please enter your details
          </p>
          <div className="w-full   flex flex-col mt-4">
            <button className="w-full my-2 rounded-md border border-1 border-[#CACBCD] p-2 text-center text-[#7D7F82] flex item-center justify-center">
              <Image
                src="/assets/icons/google2.png"
                width="20"
                height="20"
                className="mr-[14px]"
              />
              Continue with Google
            </button>
          </div>
          <div className="py-6 flex items-center justify-center">
            <div className="w-[80px] h-[1px] bg-[#4B4C4E] mx-2"></div>
            <p className="text-[#4B4C4E] text-base">or Sign with Email</p>
            <div className="w-[80px] h-[1px] bg-[#4B4C4E] mx-2"></div>
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">
                Email
              </p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
              type="text"
              placeholder="your email"
            />
          </div> 
          <div className="flex flex-col mt-6 w-full">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">Password</p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
              type="text"
              placeholder="your password"
            />
          </div>
          <div className="w-full flex items-center justify-between mt-4">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4  h-4 mr-2" />
              <p className="text-sm text-[#646568]">Remember me</p>
            </div>
            <a
              href="/forgot"
              className="text-sm  font-bold whitespace-nowrap text-[#2652FF]"
            >
              Forgot Password?
            </a>
          </div>
          <button className="bg-[#2652FF] w-full h-[51px] mt-10 rounded-md py-2 px-4 text-xl font-semibold text-white">
            Sign In
          </button>
          <div className="flex mb-1 mx-auto my-3 justify-center">
            <p className="font-normal text-base text-neutral-70">
              Already have an account?&nbsp;
            </p>
            <a
              className="font-semibold text-base text-primary-base"
              href="/register"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
