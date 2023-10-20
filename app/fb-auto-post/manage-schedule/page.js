"use client";
import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import ScheduleCalendar from "@/components/dashboard/schedule/scheduleCalendar";
import ScheduleTime from "@/components/dashboard/schedule/scheduleTime";
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
  const [size, setSize] = React.useState("md");
  const sizes = ["full"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentModal, setContentModal] = React.useState("");
  const [radio1Selected, setRadio1Selected] = useState(false);
  const [radio2Selected, setRadio2Selected] = useState(false);

  const handleRadio1Change = () => {
    if (radio1Selected) {
      setRadio1Selected(false);
    } else {
      setRadio1Selected(true);
      setRadio2Selected(false);
    }
  };

  const handleRadio2Change = () => {
    if (radio2Selected) {
      setRadio2Selected(false);
    } else {
      setRadio2Selected(true);
      setRadio1Selected(false);
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarFormat = ["Month", "Week"];
  const [viewMode, setViewMode] = useState("Month");

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(currentDate);

  const prevMonthEndDate = new Date(
    startOfMonthDate.getFullYear(),
    startOfMonthDate.getMonth(),
    0
  ).getDate();

  const startDate = startOfMonthDate.getDay();
  const endDate = endOfMonthDate.getDate();
  const days = [];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
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
              style={{
                fontFamily: "Arial, sans-serif", // Example font family
                fontWeight: "bold", // Example font weight
                color: "#333", // Example text color
                borderRadius: "5px", // Example border radius
              }}
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
                      <Modal
                        size="5xl"
                        contentModal={contentModal}
                        isOpen={isOpen}
                        onClose={onClose}
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader>
                                Determine the schedule date and time
                              </ModalHeader>
                              <ModalBody>
                                <div className="flex justify-between">
                                  <div className="w-1/2">
                                    <div className="p-4 border border-primary-20 rounded-lg">
                                      <ScheduleCalendar />
                                    </div>
                                  </div>
                                  <div className="w-1/3">
                                    <ScheduleTime />
                                    <div className="flex flex-col w-full mb-2">
                                      <div className="flex mb-1">
                                        <p className="font-normal text-base text-neutral-70">
                                          Title Schedule
                                        </p>
                                        <p className="font-normal text-base text-error-base">
                                          *
                                        </p>
                                      </div>
                                      <input
                                        className="border border-[#CFCFCF] p-3 placeholder:text-neutral-30 text-neutral-70 focus:outline-none h-10 2xl:h-12 rounded-md text-sm 2xl:text-base font-light"
                                        type="text"
                                        placeholder="Your title schedule"
                                      />
                                    </div>
                                    <div className="w-full flex justify-start items-center">
                                      <div className="flex mr-4">
                                        <input
                                          type="radio"
                                          id="radio1"
                                          name="radios"
                                          onChange={handleRadio1Change}
                                          checked={radio1Selected}
                                        />
                                        <label htmlFor="radio1">
                                          <span className="ml-2 text-[12px] font-normal text-neutral-70">
                                            Today only
                                          </span>
                                        </label>
                                      </div>
                                      <div className="flex">
                                        <input
                                          type="radio"
                                          id="radio2"
                                          name="radios"
                                          onChange={handleRadio2Change}
                                          checked={radio2Selected}
                                        />
                                        <label htmlFor="radio2">
                                          <span className="ml-2 text-[12px] font-normal text-neutral-70">
                                            Repeat on the same date
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <>
                                  <button
                                    className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-[#EDEDED] text-neutral-base rounded-md"
                                    onClick={onClose}
                                  >
                                    Clear
                                  </button>
                                  <button
                                    className="w-[100px] h-10 text-base font-medium flex items-center justify-center bg-primary-base text-white rounded-md"
                                    onClick={onClose}
                                  >
                                    Save
                                  </button>
                                </>
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
