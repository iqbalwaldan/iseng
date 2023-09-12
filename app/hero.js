import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-[url('/assets/images/home-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row pt-40">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 lg:px-0">
            <h1 className="text-6xl font-semibold text-neutral-10"><span className="text-[#F7B217] text-6xl font-semibold">Unleash Time,&nbsp;</span>Unleash Content with Sharein</h1>
            <p className="mt-4 mb-12 text-2xl font-normal text-neutral-10">ShareIn is a cutting-edge tool that streamlines and speeds up post management on Facebook using advanced auto posting technology.</p>
            <button className="px-14 py-4 rounded-lg text-xl font-semibold text-neutral-10 bg-[#F7B217]">Get Started</button>
        </div>
        <div className="hidden flex-1 lg:flex justify-center items-center"> 
            <img src='/assets/images/chat-image.png'></img>
        </div>
      </div>
    </section>
  );
}
