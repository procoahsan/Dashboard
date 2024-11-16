import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import User from '../images/user.jpg';

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  variant = 'default',
}) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [balance , setBalance] = useState("$15,453.05");
  const [Profit , setProfit] = useState("+9.34%");

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${
          variant === "v2"
            ? "border-r border-gray-200 dark:border-gray-700/60"
            : "rounded-r-2xl shadow-sm"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
          <div className="flex flex-row items-center gap-4" >
             <svg
              width="60"
              height="52"
              viewBox="0 0 60 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_78_43)">
                <path
                  d="M10.0634 0C7.39517 0.00421999 4.83752 1.07364 2.9511 2.9738C1.06468 4.87397 0.00342723 7.44983 0 10.1367V19.6919H5.69619V10.1367C5.69733 8.97082 6.15785 7.85306 6.97665 7.0288C7.79545 6.20455 8.90559 5.74117 10.0634 5.7404H17.7149V0H10.0634Z"
                  fill="url(#paint0_linear_78_43)"
                />
                <path
                  d="M11.1073 46.2654H10.0634C8.90559 46.2646 7.79545 45.8012 6.97665 44.977C6.15785 44.1527 5.69733 43.035 5.69619 41.8691V32.5487H0V41.8691C0.00495006 44.5549 1.06687 47.1293 2.95313 49.0282C4.83938 50.9272 7.39617 51.9958 10.0634 52H16.802V31.6788H18.6264L16.802 29.108V28.9064H16.658L16.2894 28.3873L13.9525 25.0945L11.617 28.3873L11.2484 28.9064H11.1044V29.108L9.28006 31.6788H11.1044L11.1073 46.2654Z"
                  fill="url(#paint1_linear_78_43)"
                />
                <path
                  d="M24.0157 17.4663L21.6802 20.7577L19.3433 24.0506H21.1676V46.2655V52.0001H26.8638V46.2655V24.0506H28.6881L26.3512 20.7577L24.0157 17.4663Z"
                  fill="url(#paint2_linear_78_43)"
                />
                <path
                  d="M42.4463 52C41.3333 52 40.2102 51.9725 39.0223 51.9435C37.8344 51.9145 36.6206 51.884 35.4226 51.884C34.8308 51.884 34.2808 51.8913 33.761 51.9058V35.4516H40.3182V45.2751L41.4701 45.3113C42.2217 45.3345 42.9316 45.3563 43.6155 45.3563C44.9546 45.3563 46.5111 45.2823 47.8877 44.7285C49.6122 44.03 51.0736 42.801 52.0633 41.2166C53.2255 39.3492 53.669 37.1181 53.3103 34.9441C52.969 32.9997 52.131 31.4642 50.5947 29.9823C49.1461 28.5817 47.3491 27.7769 45.2556 27.5913C44.5356 27.529 43.0957 27.4971 40.8164 27.4971C39.0223 27.4971 37.0165 27.5174 35.4053 27.5319L33.6386 27.5478L33.6947 20.9317C35.6904 20.9491 36.8337 20.9766 37.6242 20.9969C38.0878 21.0085 38.4233 21.0158 38.717 21.0158C39.1773 21.0153 39.6371 20.9915 40.095 20.9447C42.7948 20.7011 45.6602 18.0346 45.653 13.5746C45.6443 8.82448 42.3599 6.85398 39.5507 6.61474H39.5133H28.5615H28.5111C28.2685 6.64393 28.0466 6.76712 27.8926 6.95821C27.7386 7.1493 27.6645 7.39327 27.6861 7.63841V13.4716H21.0972V0.00146484H37.9669C39.6659 0.00146484 41.2988 0.027562 42.622 0.343654C46.9244 1.36733 50.1627 4.4572 51.5061 8.82303C52.4939 12.0362 51.9885 18.7698 50.5903 21.0332L50.0633 21.8814L50.9618 22.3164C54.7329 24.1259 57.4024 26.9563 58.8941 30.7088C59.7726 32.9456 60.134 35.3544 59.951 37.7527C59.7854 39.9494 59.1467 42.0834 58.0792 44.0064C56.1051 47.5776 52.9892 50.0962 49.0713 51.2895C47.0021 51.9203 44.4463 52 42.4478 52H42.4463Z"
                  fill="url(#paint3_linear_78_43)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_78_43"
                  x1="8.85745"
                  y1="0"
                  x2="8.85745"
                  y2="19.6919"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2B7AFF" />
                  <stop offset="1" stop-color="#02245E" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_78_43"
                  x1="9.31318"
                  y1="25.0945"
                  x2="9.31318"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2B7AFF" />
                  <stop offset="1" stop-color="#02245E" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_78_43"
                  x1="24.0157"
                  y1="17.4663"
                  x2="24.0157"
                  y2="52.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2B7AFF" />
                  <stop offset="1" stop-color="#02245E" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_78_43"
                  x1="40.5472"
                  y1="0.00146484"
                  x2="40.5472"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2B7AFF" />
                  <stop offset="1" stop-color="#02245E" />
                </linearGradient>
                <clipPath id="clip0_78_43">
                  <rect width="60" height="52" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className=" font-extrabold text-2xl">AI BROKER</span>
          </div>
           
          </NavLink>
        </div>


        <div className="flex items-center flex-col justify-center text-black bg-custom-gradient rounded-xl w-48 self-center h-36">
          <img className="rounded-full h-14 w-14" src={User} alt="" />
          <span>Paul Nicholas</span>
          <span className="text-sm ">Verified</span>

        </div>

        <div className="flex items-center flex-col gap-3 justify-center text-black bg-transparent rounded-xl w-48 self-center h-36">
          <span className="text-lg font-inter dark:text-white" >Total Balance</span>
          <span className="text-xl font-semibold dark:text-white  ">{balance} <span className="text-sm font-semibold text-green-600  ">{Profit}</span></span>

        </div>

        {/* Links */}
        <div className="space-y-8 mt-5">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span> */}
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
             
            
              {/* Messages */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("messages") &&
                  "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard"
                  className={` h-10 rounded-md flex items-center px-4 text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("dashboard")
                      ? " bg-blue-500 text-white dark:bg-blue-500 dark:text-white"
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg
                        className={`shrink-0 fill-current ${
                          pathname.includes("dashboard")
                            ? "text-white"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l8.414-8.414a3 3 0 0 0 0-4.242L13.95.879ZM11.12 2.293a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-8.2 8.2-3.232.646.646-3.232 8.2-8.2Z" />
                        <path d="M10 14a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" />
                      </svg>
                      <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Market
                      </span>
                    </div>
                    {/* Badge */}
                    
                  </div>
                </NavLink>
              </li>
              {/* Inbox */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("inbox") &&
                  "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 px-4 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("inbox")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      className={`shrink-0 fill-current ${
                        pathname.includes("inbox")
                          ? "text-violet-500"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" />
                    </svg>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Inbox
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Calendar */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("calendar") &&
                  "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 px-4 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("calendar")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      className={`shrink-0 fill-current ${
                        pathname.includes("calendar")
                          ? "text-violet-500"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                      <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                      <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                    </svg>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Calendar
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Campaigns */}
              <li
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("campaigns") &&
                  "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="https://cruip.com/mosaic/"
                  className={`block text-gray-800 px-4 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("campaigns")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg
                      className={`shrink-0 fill-current ${
                        pathname.includes("campaigns")
                          ? "text-violet-500"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.649 1.018a1 1 0 0 1 .793 1.171L6.997 4.5h3.464l.517-2.689a1 1 0 1 1 1.964.378L12.498 4.5h2.422a1 1 0 0 1 0 2h-2.807l-.77 4h2.117a1 1 0 1 1 0 2h-2.501l-.517 2.689a1 1 0 1 1-1.964-.378l.444-2.311H5.46l-.517 2.689a1 1 0 1 1-1.964-.378l.444-2.311H1a1 1 0 1 1 0-2h2.807l.77-4H2.46a1 1 0 0 1 0-2h2.5l.518-2.689a1 1 0 0 1 1.17-.793ZM9.307 10.5l.77-4H6.612l-.77 4h3.464Z" />
                    </svg>
                    <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Campaigns
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Settings */}
             
            </ul>
          </div>
          {/* More group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              {/* <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span> */}
            </h3>
            <ul className="mt-3">
              {/* Authentication */}
             
              {/* Onboarding */}
             
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
