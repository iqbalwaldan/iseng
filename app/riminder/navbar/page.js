import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  return (
    <nav className={`fixed w-full h-24 z-50`}>
      <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="font-bold text-[32px] text-primary-base">Reminder</p>
          </div>
        </Link>
        <form className="w-[526px] justify-start mr-96">
          <div className="relative">
              <input type="search" placeholder='Type Here' className="w-full p-4 rounded-lg border-2 bg-white" />
          </div>

        </form>
      </div>
    </nav>
  );
}
