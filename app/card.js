import Link from "next/link";
import React from "react";
import {
  AiOutlineClose,
  AiOutlineQuestionCircle,
  AiOutlineCheck,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export default function Card() {
  const subscriptionCardItems = [
    {
      id: "basic",
      title: "Basic",
      desc: "Lorem ipsum dolor sit amet consectetur. Fusce nisl",
      normal_price: "190.000",
      disc: "60",
      disc_bg_color: "bg-[#2652FF]",
      disc_text_color: "text-primary-base",
      disc_price: "60.000",
      btn_color: "bg-primary-base",
      btn_text_color: "text-primary-base",
      btn_bottom_color: "#2652FF",
      icons: [
        { icon: <AiOutlineClose color="red" />, text: "Random Delay Group" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Random Delay Marketplace",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Generate Photo Frame",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Marketplace",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Group",
        },
        { icon: <AiOutlineClose color="red" />, text: "Auto Inbox" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Marketplace by Schedule",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Group by Schedule",
        },
      ],
    },
    {
      id: "premium",
      title: "Premium",
      desc: "Lorem ipsum dolor sit amet consectetur. Fusce nisl",
      normal_price: "190.000",
      disc: "60",
      disc_bg_color: "bg-[#F7B217]",
      disc_text_color: "text-button-base",
      disc_price: "60.000",
      btn_color: "bg-button-base",
      btn_text_color: "text-button-base",
      btn_bottom_color: "#F7B217",
      icons: [
        { icon: <AiOutlineClose color="red" />, text: "Random Delay Group" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Random Delay Marketplace",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Generate Photo Frame",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Marketplace",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Group",
        },
        { icon: <AiOutlineClose color="red" />, text: "Auto Inbox" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Marketplace by Schedule",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Group by Schedule",
        },
      ],
    },
    {
      id: "basic",
      title: "Basic",
      desc: "Lorem ipsum dolor sit amet consectetur. Fusce nisl",
      normal_price: "190.000",
      disc: "60",
      disc_bg_color: "bg-[#2652FF]",
      disc_text_color: "text-primary-base",
      disc_price: "60.000",
      btn_color: "bg-primary-base",
      btn_text_color: "text-primary-base",
      btn_bottom_color: "#2652FF",
      icons: [
        { icon: <AiOutlineClose color="red" />, text: "Random Delay Group" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Random Delay Marketplace",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Generate Photo Frame",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Marketplace",
        },
        {
          icon: <AiOutlineCheck color="green" />,
          text: "Massal Post to Group",
        },
        { icon: <AiOutlineClose color="red" />, text: "Auto Inbox" },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Marketplace by Schedule",
        },
        {
          icon: <AiOutlineClose color="red" />,
          text: "Auto Post to Group by Schedule",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-row gap-5 2xl:gap-12">
      {subscriptionCardItems.map((item, index) => (
        <div key={item.id} className={`${index === 0 ? "" : "ml-4"}`}>
          <div className="p-6 border border-neutral-30 rounded-[20px]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-semibold text-neutral-80 mb-2">
                  {item.title} Plan
                </h1>
                <p className="px-[5%] 2xl:px-[20%] text-base 2xl:text-lg font-normal text-neutral-80 mb-4">
                  {item.desc}
                </p>
                {/* Render other subscription card content */}
                <div className="flex justify-evenly items-center mb-4">
                  <p className="text-base font-normal text-neutral-80 line-through">
                    Rp. {item.normal_price},
                  </p>
                  <div
                    className={`p-2 ${item.disc_bg_color} bg-opacity-30 ${item.disc_text_color} rounded-[10px] text-sm font-semibold`}
                  >
                    <p>Diskon {item.disc}%</p>
                  </div>
                </div>
                <div className="flex justify-center items-center mb-4">
                  <p className="font-light text-lg text-neutral-80">RP</p>
                  <h1 className="text-5xl font-bold text-neutral-80">
                    {item.disc_price}
                  </h1>
                  <p className="font-light text-lg text-neutral-80">/Bln</p>
                </div>
                <Link href="#">
                  <button
                    className={`py-3 px-8 2xl:px-10 ${item.btn_color} text-base 2xl:text-xl font-semibold text-white rounded-lg mb-2`}
                  >
                    Choose a Package
                  </button>
                </Link>
                <p className="font-normal text-xs text-neutral-50">
                  Rp. {item.normal_price}/month at the time of service renewal
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start mt-14">
              <h2 className="text-lg font-semibold text-neutral-80 mb-4">
                Top Features
              </h2>
              {item.icons.map((iconItem, index) => (
                <div className="flex justify-between w-full mb-4" key={index}>
                  <div className="flex">
                    {iconItem.icon}
                    <p className="ml-2 text-sm font-normal text-neutral-80">
                      {iconItem.text}
                    </p>
                  </div>
                  <AiOutlineQuestionCircle color="grey" />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-16">
              <p
                className={`text-base font-semibold ${item.btn_text_color} mr-4`}
              >
                See more
              </p>
              <FiChevronDown color={item.btn_bottom_color} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
