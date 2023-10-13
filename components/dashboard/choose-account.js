import React, { useState } from "react";
import { LinkedAccountData } from "@/app/fb-auto-post/page";

export default function ChooseAccount() {
  const [selectedAccount, setSelectedAccount] = useState();

  const handleAccountSelect = (accountId) => {
    setSelectedAccount(accountId);
  };
  return (
    <div className="h-1/2 2xl:h-[458px] w-full 2xl:w-[343px] bg-white p-2">
      <div className="text-lg font-semibold text-black mb-4">Choose Account</div>
      <div className="overflow-y-auto max-h-[220px] 2xl:max-h-[403px]">
        <div className="relative mb-3">
          <input
            className="pl-10 bg-[#F8F8F8] text-xs 2xl:text-base font-normal placeholder:text-xs 2xl:placeholder:text-base placeholder:font-normal text-neutral-60 focus:outline-none h-9 2xl:h-12 rounded-md w-full"
            type="text"
            placeholder="Search"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <img src="/assets/icons/search-icon.png" alt="search icon" />
          </div>
        </div>
        <div className="flex flex-col gap-1 2xl:gap-3">
          {LinkedAccountData.map((item) => (
            <div key={item.id}>
              <div
                className="border border-neutral-20 p-1 rounded flex flex-row justify-between items-center cursor-pointer"
                onClick={() => {
                  handleAccountSelect(item.id);
                }}
              >
                <div className="flex items-center">
                  <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2 2xl:mr-4">
                    <img src={`/assets/images/${item.images}`} />
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs 2xl:text-sm font-normal text-neutral-80">
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div
                    className={`mr-2 2xl:mr-4 w-10 2xl:w-14 h-[18px] flex items-center justify-center rounded-[5px] text-[8px] 2xl:text-[10px] font-light border ${
                      item.status === "suspend"
                        ? "bg-error-20 border-error-60 text-error-60"
                        : "bg-success-20 border-success-60 text-success-60"
                    }`}
                  >
                    {item.status}
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedAccount === item.id
                        ? "border-[3px] border-primary-base"
                        : "border-[1px] border-primary-base"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
