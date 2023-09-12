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

export default function Register() {
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
          <h1 className="font-bold text-4xl text-neutral-80 mb-4">Sign Up</h1>
          <p className="text-base font-light text-neutral-70">
            Welcome back! Please enter your details
          </p>
          <div className="md:flex flex-row md:justify-between">
            <div className="flex flex-col mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">
                  First Name
                </p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
                type="text"
                placeholder="your first name"
              />
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex mb-1">
                <p className="font-normal text-base text-neutral-70">
                  Last Name
                </p>
                <p className="font-normal text-base text-error-base">*</p>
              </div>
              <input
                className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
                type="text"
                placeholder="your last name"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
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
          <div className="flex flex-col mt-6">
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
          <div className="flex flex-col mt-6">
            <div className="flex mb-1">
              <p className="font-normal text-base text-neutral-70">
                Password Confirmation
              </p>
              <p className="font-normal text-base text-error-base">*</p>
            </div>
            <input
              className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
              type="text"
              placeholder="your password"
            />
          </div>
          <button className="bg-[#2652FF] w-full h-[51px] mt-10 rounded-md py-2 px-4 text-xl font-semibold text-white">
            Sign Up
          </button>
          <p className="my-6 text-center">or login with</p>
          <div className="w-full h-[51px] flex items-center justify-center rounded-md outline outline-neutral-30 outline-1">
            <Image src="/assets/icons/google2.png" width="20" height="20" />
            <p className="ml-2 font-normal text-lg text-neutral-60">
              Continue with Google
            </p>
          </div>
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
