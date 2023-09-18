"use client";
import { MessageIcon, NotificationIcon } from "@/public/assets/icons";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Header({ title }) {
  const [hasNotifications, setHasNotifications] = useState(true);
  const notificationIconColor = hasNotifications
    ? "text-error-base"
    : "text-transparent";

  return (
    <header className="sticky top-0 z-9999 flex w-full h-[86px] mt-4 bg-white">
      <div className="flex flex-grow items-center gap-2 justify-between px-8">
        <div className="flex items-center w-[75%] justify-between">
          <h1 className="text-4xl font-semibold text-primary-base">{title}</h1>
          <div className="relative w-1/2">
            <input
              className="pl-10 bg-[#F8F8F8] text-base font-normal placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-12 rounded-md w-full"
              type="text"
              placeholder="Search"
            />
            <FiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-neutral-60"/>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center justify-end">
          <NotificationIcon className={notificationIconColor} />
          <MessageIcon />
          <div className="w-8 h-8 rounded-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/person1.png')]"></div>
        </div>
      </div>
    </header>
  );
}
