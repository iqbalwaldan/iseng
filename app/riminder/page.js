"use client"
import React from "react";
import Sidebar from "./sidebar/page";
import Navbar from "./navbar/page";
import IsI from "./isi/page";

export default function Subscription() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <Sidebar />
      <div className="ml-4 flex flex-col">
        <Navbar />
      </div>
      <div className="flex flex-col mt-1">
        <IsI />
      </div>
    </div>
  );
}
