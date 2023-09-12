import React from "react";
import {AiOutlineClose, AiOutlineQuestionCircle, AiOutlineCheck} from 'react-icons/ai'
import {FiChevronDown} from 'react-icons/fi'

export default function Card() {
  return (
    <div className="p-6 border border-neutral-30 rounded-[20px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-neutral-80 mb-2">Basic Plan</h1>
          <p className="px-[20%] text-lg font-normal text-neutral-80 mb-4">
          Lorem ipsum dolor sit amet consectetur. Fusce nisl
          </p>
          <div className="flex justify-evenly mb-4">
            <p className="text-base font-normal text-neutral-80 line-through">110.000</p>
            <div className="p-2 bg-primary-base bg-opacity-30 rounded-[10px] text-sm font-semibold text-primary-base">
              <p>Diskon 60%</p>
            </div>
          </div>
          <div className="flex justify-center items-center mb-4">
            <p className="font-light text-lg text-neutral-80">RP</p>
            <h1 className="text-5xl font-bold text-neutral-80">110.000</h1>
            <p className="font-light text-lg text-neutral-80">/Bln</p>
          </div>
          <button className="py-3 px-10 bg-primary-base text-xl font-semibold text-white rounded-lg mb-2">Choose a Package</button>
          <p className="font-normal text-xs text-neutral-50">Rp. 190,000/month at the time of service renewal</p>
        </div>
      </div>
      <div className="flex flex-col items-start mt-14">
        <h2 className="text-lg font-semibold text-neutral-80 mb-4">Top Features</h2>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Random Delay Group</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Random Delay Marketplace</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Auto Generate Photo Frame</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineCheck color="green"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Massal Post to Marketplace</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineCheck color="green"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Massal Post to Group</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Auto Inbox</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Auto Post to Marketplace by Schedule</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
        <div className="flex justify-between w-full mb-4">
            <div className="flex">
                <AiOutlineClose color="red"/>
                <p className='ml-2 text-sm font-normal text-neutral-80'>Auto Post to Group by Schedule</p>
            </div>
            <AiOutlineQuestionCircle color="grey"/>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <p className="text-base font-semibold text-primary-base mr-4">See more</p>
        <FiChevronDown color="blue"/>
      </div>
    </div>
  );
}