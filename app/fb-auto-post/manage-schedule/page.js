"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { Tooltip } from "@nextui-org/react";
import { Radio } from "@material-tailwind/react";
import {
  addDays,
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
export default function ManageSchedule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const sizes = ["full"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarFormat = ["Month", "Week"];
  const [viewMode, setViewMode] = useState("Month");

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(currentDate);

  const changeCalendarPage = (direction) => {
    if (viewMode === "Month") {
      setCurrentDate(addMonths(currentDate, direction));
    } else if (viewMode === "Week") {
      setCurrentDate(addWeeks(currentDate, direction));
    }
  };

  const prevMonthEndDate = new Date(
    startOfMonthDate.getFullYear(),
    startOfMonthDate.getMonth(),
    0
  ).getDate();

  const daysInMonth = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  });

  const daysInWeek = eachDayOfInterval({
    start: startOfWeekDate,
    end: addDays(startOfWeekDate, 6),
  });

  const startDate = startOfMonthDate.getDay();
  const endDate = endOfMonthDate.getDate();
  const days = [];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);
  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    setIsScrollEnabled(!isEditMode);
  };

  const formatValue = (value) => value.toString().padStart(2, "0");
  const [time, setTime] = useState(0);
  const [minute, setMinute] = useState(0);

  const beforeTime = formatValue(time > 0 ? time - 1 : 23);
  const afterTime = formatValue(time < 23 ? time + 1 : 0);
  const beforeMinute = formatValue(minute > 0 ? minute - 1 : 59);
  const afterMinute = formatValue(minute < 59 ? minute + 1 : 0);

  const handleScroll = (e, inputType) => {
    e.preventDefault();
    const scrollDirection = e.deltaY > 0 ? 1 : -1;

    if (inputType === "time") {
      let newValue = time + scrollDirection;
      if (newValue < 0) newValue = 23;
      if (newValue > 23) newValue = 0;
      setTime(newValue);
    } else if (inputType === "minute") {
      let newValue = minute + scrollDirection;
      if (newValue < 0) newValue = 59;
      if (newValue > 59) newValue = 0;
      setMinute(newValue);
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 5;
  const [data, setData] = useState([
    // Your data array goes here
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-error-20",
      status_border_color: "border-error-60",
      status_text_color: "text-error-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "Active",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    {
      title: "Toyota Supra SK8",
      Name: "Judha Maygustya Account",
      SED: "23 December 2023",
      category: "Marketplace Post",
      Status: "passed",
      status_bg_color: "bg-success-20",
      status_border_color: "border-success-60",
      status_text_color: "text-success-60",
    },
    // Example data...
  ]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSortStatus = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Status.localeCompare(b.Status);
      } else {
        return b.Status.localeCompare(a.Status);
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setData(sortedData);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("asc");

  const Alert2 = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithBootstrapButtons
      .fire({
        title: "Schedule Post Will Be Deleted",
        text: "Are you sure you want to delete your schedule post?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Successfully Delete Schedule Post",
            "You have successfully deleted the posting schedule, please refresh the website page to display the latest posting schedule list",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Are you sure you want to delete your Schedule post?",
            "Sorry, the schedule failed to delete because you lost connection, please check your connection connection and try again",
            "error"
          );
        }
      });
  };

  const Alert3 = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithBootstrapButtons
      .fire({
        title: "Schedule Post Will Be Updated",
        text: "Are you sure you want to update your schedule post?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Successfully Updated Schedule Post",
            "You have successfully reset the posting schedule and we will upload your content when the specified date arrives",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Failed to Update Schedule Post",
            "Sorry, the schedule failed to add because the date you entered has passed.",
            "error"
          );
        }
      });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentEntriesStart = startIndex + 1;
  const currentEntriesEnd = Math.min(endIndex, data.length);

  // Generate an array of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  for (let i = prevMonthEndDate - startDate + 1; i <= prevMonthEndDate; i++) {
    days.push(
      <div
        className={`text-center h-[35px] 2xl:h-[43px] flex items-center justify-center text-base 2xl:text-xl font-semibold bg-primary-20 px-2 py-1 text-primary-10 rounded-[4px] cursor-default`}
        key={`prev-month-${i}`}
      >
        {i}
      </div>
    );
  }
  for (let i = 1; i <= endDate; i++) {
    const currentDateCursor = new Date(
      startOfMonthDate.getFullYear(),
      startOfMonthDate.getMonth(),
      i
    );
    days.push(
      <div
        className={`text-center flex items-center justify-center text-base 2xl:text-xl font-semibold border border-primary-base text-primary-50 px-2 py-1 rounded-[4px] cursor-pointer hover:bg-neutral-20 hover:text-primary-base`}
      >
        {format(currentDateCursor, "d")}
      </div>
    );
  }

  return (
    <div className="flex w-full md:flex-row">
      <div className="flex flex-col w-[69%]">
        <div className="w-full px-3 ml-1">All Schedule</div>
        <div className="md:flex w-full flex-row md:justify-start">
          <div className="w-full px-3 ml-1 mt-4 text-success-50">
            Active Scheduled
          </div>
          <div className="w-full ml-96">
            <button
              className="w-[200px] h-[35px] my-2 rounded-md  border-1 bg-[#DCDDDE] p-2 text-xs text-black flex item-center justify-center"
              onClick={handleSortStatus}
            >
              Sort by Status: {sortOrder === "asc" ? "Suspend" : "Active"}
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <table className="w-full text-sm text-left ml-1 text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Post Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Facebook
                </th>
                <th scope="col" className="px-6 py-3">
                  Posting Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap text-black"
                  >
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.Name}</td>
                  <td className="px-6 py-4">{item.SED}</td>
                  <td className="px-6 py-4">{item.category}</td>

                  <td className="">
                    <div
                      className={`flex items-center justify-center rounded-md border ${item.status_bg_color} ${item.status_border_color} ${item.status_text_color}  h-[18px] w-[56px] text-[10px] ml-5`}
                    >
                      {item.Status}
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          onPress={() => handleOpen(size)}
                          color="white"
                          variant="light"
                        >
                          <Image
                            src="/assets/icons/icons-edit.png"
                            width="32"
                            height="32"
                          />
                        </Button>
                      ))}
                      <Modal size={size} isOpen={isOpen} onClose={onClose}>
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex gap-1"></ModalHeader>
                              <ModalBody>
                                <div className="flex justify-evenly w-full">
                                  <div className="w-full flex justify-evenly">
                                    <div>
                                      <p className="mb-3 font-semibold text-xl text-neutral-80">
                                      Determine the schedule date and time{" "}
                                      </p>
                                      <div className="w-[464px] border border-neutral-20 p-4 rounded mr-4">
                                        <div className="flex items-center mb-3">
                                          <button
                                            onClick={() =>
                                              changeCalendarPage(-1)
                                            }
                                          >
                                            <img src="/assets/icons/left_arrow.png" />
                                          </button>
                                          <h2 className="text-base 2xl:text-xl text-neutral-100 font-semibold cursor-default mx-[10px]">
                                            {format(currentDate, "MMMM yyyy")}
                                          </h2>
                                          <button
                                            onClick={() =>
                                              changeCalendarPage(1)
                                            }
                                          >
                                            <img src="/assets/icons/right_arrow.png" />
                                          </button>
                                        </div>
                                        <div className="grid grid-cols-7 gap-x-2 mb-4">
                                          {daysInWeek.map((day) => (
                                            <div
                                              key={day}
                                              className="bg-primary-base h-[25px] text-lg font-medium text-white p-2 rounded flex items-center justify-center"
                                            >
                                              {format(day, "EEEEEE")}
                                            </div>
                                          ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-x-3 gap-y-3 2xl:gap-y-[22px]">
                                          {days}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col ml-6">
                                      <p className="mb-3 font-semibold text-xl text-neutral-80">
                                      Enter posting time{" "}
                                      </p>
                                      {isEditMode ? (
                                        <div
                                          className="mb-4 flex flex-col gap-1 2xl:gap-3 bg-white shadow-lg rounded-lg py-1 2xl:py-2 px-8 cursor-pointer"
                                          onClick={handleEditClick}
                                        >
                                          <div className="flex flex-row px-2 justify-between">
                                            <div
                                              className="text-primary-50 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "time")
                                              }
                                            >
                                              {beforeTime}
                                            </div>
                                            <div
                                              className="text-primary-50 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "minute")
                                              }
                                            >
                                              {beforeMinute}
                                            </div>
                                          </div>
                                          <div className="flex bg-primary-base flex-row px-2 py-1 2xl:py-2 rounded-[5px] justify-between">
                                            <div
                                              className="text-neutral-10 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "time")
                                              }
                                            >
                                              {formatValue(time)}
                                            </div>
                                            <div className="text-neutral-10 font-normal text-base">
                                              :
                                            </div>
                                            <div
                                              className="text-neutral-10 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "minute")
                                              }
                                            >
                                              {formatValue(minute)}
                                            </div>
                                          </div>
                                          <div className="flex flex-row px-2 justify-between">
                                            <div
                                              className="text-primary-50 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "time")
                                              }
                                            >
                                              {afterTime}
                                            </div>
                                            <div
                                              className="text-primary-50 font-normal text-base"
                                              onWheel={(e) =>
                                                isScrollEnabled &&
                                                handleScroll(e, "minute")
                                              }
                                            >
                                              {afterMinute}
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div
                                          className="md:flex flex-row mb-4 justify-start cursor-pointer"
                                          onClick={handleEditClick}
                                        >
                                          <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold">
                                              <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                                                {formatValue(time)}
                                              </div>
                                            </div>
                                          </div>
                                          <p className="mx-2 flex items-center text-primary-50 font-bold text-xl">
                                            :
                                          </p>
                                          <div className="flex flex-col items-center justify-center gap-2">
                                            <div className="border border-[#CFCFCF] text-primary-50 p-4 rounded-md text-3xl 2xl:text-6xl font-bold cursor-default">
                                              <div className="w-[50px] h-[60px] 2xl:w-[71px] 2xl:h-[84px] flex items-center justify-center">
                                                {formatValue(minute)}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}

                                      <div className="flex flex-col mt-1 w-full">
                                        <div className="flex mb-1">
                                          <p className="font-normal text-base text-neutral-70">
                                            Tittle Schedule
                                          </p>
                                          <p className="font-normal text-base text-error-base">
                                            *
                                          </p>
                                        </div>
                                        <input
                                          className="border border-[#CFCFCF] p-3 text-neutral-70 focus:outline-none h-12 rounded-md text-base font-light"
                                          type="text"
                                          placeholder="Your tittle schedule"
                                        />
                                        <div className="flex items-center mt-3">
                                          <div className="flex items-center mr-6">
                                            <input
                                              type="radio"
                                              id="option1"
                                              name="radiobutton"
                                              value="option1"
                                              className="h-4 w-4 text-primary-base"
                                            />
                                            <label
                                              htmlFor="option1"
                                              className="ml-2 text-base text-neutral-70"
                                            >
                                              Today only
                                            </label>
                                          </div>
                                          <div className="flex items-center">
                                            <input
                                              type="radio"
                                              id="option2"
                                              name="radiobutton"
                                              value="option2"
                                              className="h-4 w-4 text-primary-base"
                                            />
                                            <label
                                              htmlFor="option2"
                                              className="ml-2 text-base text-neutral-70"
                                            >
                                              Repeat on the same date
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>
                              <ModalFooter className="mb-96">
                                <Button
                                  className="bg-[#EDEDED] w-[100px]  mt-3 rounded-md py-2 px-4 text-xs font-semibold text-black"
                                  onPress={onClose}
                                >
                                  Clear
                                </Button>
                                <Button
                                  className="bg-[#2652FF] w-[100px]  mt-3 rounded-md py-2 px-4 text-xs font-semibold text-white"
                                  onClick={Alert3}
                                >
                                  Update
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                      <button
                        className="w-[32px] h-[32px] my-1 rounded-md  ml-0"
                        onClick={Alert2}
                      >
                        <Image
                          src="/assets/icons/icons-delete.png"
                          width="32"
                          height="32"
                          className="mr-[14px]"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-3 ml-7 text-gray-500 dark:text-gray-400 text-[14px]">
            <div>
              Showing data {currentEntriesStart} to {currentEntriesEnd} of{" "}
              {data.length} entries
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-[#F5F5F5] text-black p-2 rounded-md"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`bg-[#F5F5F5] text-black p-2 rounded-md ${
                    pageNumber === currentPage ? "font-bold" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    borderColor:
                      pageNumber === currentPage ? "blue" : "#F5F5F5",
                    cursor: "pointer",
                  }}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                className="bg-[#F5F5F5] text-black p-2 rounded-md"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= data.length}
                style={{
                  borderColor:
                    currentPage * itemsPerPage >= data.length
                      ? "#F5F5F5"
                      : "blue",
                  cursor:
                    currentPage * itemsPerPage >= data.length
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
