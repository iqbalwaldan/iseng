import React from "react";

export default function Newsletter() {
  return (
    <section className="w-full h-full bg-white py-28">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl font-semibold text-primary-base mb-4">
          Support
        </h3>
        <h1 className="text-4xl font-bold text-neutral-80">
          Subscribe Newsletter & get
        </h1>
        <h2 className="text-4xl font-light text-neutral-60 mb-14">
          Sharein Good Deals
        </h2>
        <div className="relative flex items-center w-1/2">
          <img
            src="/assets/icons/email.png"
            className="absolute ml-7"
            width={24}
            height={24}
          />
          <input
            className="border border-white shadow-xl w-full p-8 text-neutral-70 focus:outline-none h-12 rounded-[20px] text-base font-light pl-20"
            type="text"
            placeholder="Your email"
          />
          <div className="absolute flex gap-3 justify-evenly items-center bg-primary-base px-6 py-2 rounded-[20px] right-4">
            <img src="/assets/icons/pin-navigation.png"/>
            <p className="text-lg font-semibold text-neutral-10">Subscribe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
