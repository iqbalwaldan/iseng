"use client";
import React, { useState } from "react";

export const groupData = [
    {
      id: "1",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "2",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "3",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "4",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "5",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "6",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "7",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "8",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "9",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "10",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "11",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "12",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "13",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "14",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
    {
      id: "15",
      images: "sh-icon.png",
      name: "Sharein Community Surabaya",
      member: "105K",
    },
  ];

export default function HalamanAutoAdd1() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState(groupData.map(() => false));

  // Event handlers...
  const handleSelectAll = () => {
    setSelectAllChecked(true);
    setCheckboxes(groupData.map(() => true));
  };

  const handleDeselectAll = () => {
    setSelectAllChecked(false);
    setCheckboxes(groupData.map(() => false));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);

    const allChecked = newCheckboxes.every((checkbox) => checkbox);
    setSelectAllChecked(allChecked);
  };

  return (
    <div className="flex h-1/2 2xl:h-[458px] w-full bg-white">
      <div className="w-1/2 p-2">
        <div className="text-lg font-semibold text-black mb-4">Choose Group</div>
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
            {groupData.map((item) => (
              <div key={item.id}>
                <div className="border border-neutral-20 p-1 rounded flex flex-row justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <div className="flex w-7 h-7 2xl:w-[33px] 2xl:h-[33px] items-center mr-2">
                      <img src={`/assets/icons/${item.images}`} alt="icon" />
                    </div>
                    <div>
                      <p className="text-xs 2xl:text-sm font-normal text-black">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-light text-black">
                        {item.member} Member
                      </p>
                    </div>
                  </div>
                  <input type="checkbox" className="w-4 h-4 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full max-h-[565px] 2xl:max-h-[677px] border rounded lg overflow-y-auto">
          <table className="min-w-full table-auto mb-3">
            {/* Table 1 contents */}
            <thead className="sticky top-0 bg-white border-b border-neutral-20">
              <tr className="border-b-1 text-center">
                <th className="border-none px-4 py-2 text-sm font-normal text-[#B5B7C0]">
                  Account Name
                </th>
                {/* Add other table headers */}
              </tr>
            </thead>
            <tbody>
              {groupData.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border-none px-4 py-2 text-sm font-normal text-neutral-60">
                    {item.name}
                  </td>
                  {/* Add other table data cells */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center w-full justify-end">
          <button
            className="bg-primary-10 rounded-md text-base font-medium text-primary-base py-1 px-5 2xl:py-2 2xl:px-12 mt-3"
            onClick={selectAllChecked ? handleDeselectAll : handleSelectAll}
          >
            {selectAllChecked ? "Deselect All" : "Select All"}
          </button>
        </div>
      </div>
    </div>
  );
}
