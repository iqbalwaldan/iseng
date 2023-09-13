"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Reason from "./reason";
import Subscribe from "./subscribe";
import Join from "./join";
import How from "./how";
import Commitment from "./commitment";
import Testimonial from "./testimonial";
import Newsletter from "./newsletter";
import Footer from "./footer";

export default function Home() {
  return (
    
    <div className="">
      <Navbar/>
      <Hero/>
      <Reason/>
      <Subscribe/>
      <How/>
      <Join/>
      <Commitment/>
      <Testimonial/>
      <Features/>
      <Newsletter/>
      <Footer/>
      
      
      {/* <div className="h-10 flex content-center justify-between">
        <div className="flex flex-row items-center gap-2 h-42">
          <div className="w-[35px] h-[35px] bg-gradient-to-b from-primary-base to-secondary-base rounded-[5px] flex items-center justify-center">
            <Image
              src="/assets/images/logo-white.png"
              width="21"
              height="23"
            ></Image>
          </div>
          <p className="font-bold text-[32px] text-primary-base">Sharein</p>
        </div>
        <nav className="">
          <Link
            href="/home"
            className="text-base font-semibold text-neutral-10 mr-14"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-base font-semibold text-neutral-10 mr-14"
          >
            features
          </Link>
          <Link
            href="/pricing"
            className="text-base font-semibold text-neutral-10 mr-14"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="text-base font-semibold text-neutral-10 mr-14"
          >
            Resources
          </Link>
          <Link href="/register">
            <button className="px-4 py-1 w-1/5 mr-4 rounded-xl text-base font-semibold text-neutral-10 border-2 border-neutral-10">
              Register
            </button>
          </Link>
          <Link href="/login">
            <button className="px-4 py-1 w-1/5 rounded-xl text-base font-semibold bg-neutral-10 text-primary-base">
              Login
            </button>
          </Link>
        </nav>
      </div> */}
    </div>
  );
}
