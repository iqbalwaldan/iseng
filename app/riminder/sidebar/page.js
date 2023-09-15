import React from "react";
import Image from "next/image";

import {
  BiHomeAlt,
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
} from "react-icons/bi";

export default function Sidebar() {
  const menu1 = [
    { name: "Marketplace Post", icon: <BiHomeAlt />},
    { name: "Group Post ", icon: <BiGridAlt /> },
  ];
  const menu2 = [
    { name: "Auto Add", icon: <BiHomeAlt /> },
    { name: "Auto Inbox", icon: <BiGridAlt /> },
    { name: "Join All Group", icon: <BiCreditCardAlt /> },
  ];
  const menu3 = [
    { name: "Reminder", icon: <BiHomeAlt /> },
    { name: "Manage Schedule", icon: <BiGridAlt /> },
    { name: "Login Multi Account", icon: <BiCreditCardAlt /> },
  ];
  const menu4 = [
    { name: "Subscription", icon: <BiHomeAlt /> },
  ];

  const schedulePayments = ["Monthly Rent", "Food Payment", "Utility Bills"];

  return (
    <div className="h-full border-r border-gray-200 w-72 px-9 space-y-10">
      <div className="flex flex-row items-center pt-8">
        <img
          src="/assets/icons/sh-icon.png"
          className="w-9 h-9 mr-3"
        />
        <div class="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-b from-[#2E6AFF] to-[#4D2DED]">
          ShareIn
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <div className="mb-5 text-indigo-700">Dashboard</div>
          <div className="mb-5 text-neutral-70">Post Tools</div>
          <ul className="space-y-7">
            {menu1.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-400"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <div className="mb-5 text-neutral-70">Bot Tools</div>
          <ul className="space-y-7">
            {menu2.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-400"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <div className="mb-5 text-neutral-70">Management</div>
          <ul className="space-y-7">
            {menu3.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-400"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="space-y-10">
        <div>
          <div className="mb-5 text-neutral-70">Others</div>
          <ul className="space-y-7">
            {menu4.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-400"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
