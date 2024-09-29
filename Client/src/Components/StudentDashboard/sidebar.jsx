import React, { useState } from "react";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { IoDocumentLockOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";
import avtar from "../../assets/awatar.png"
import {Link} from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BookOpenCheck, ChevronRight, CircleHelp, CloudUpload, CloudUploadIcon, LogOut, MousePointer2, Scroll, ScrollText, ShieldCheck, User } from "lucide-react";

const StudentSidebar = () => {
  const [isApplicationOpen, setApplicationOpen] = useState(false);

  const toggleApplicationDetails = () => {
    setApplicationOpen(!isApplicationOpen);
  };

  return (
    <div className="">
      <div className="w-80 fixed p-2 bg-white flex-col justify-start items-start gap-5 inline-flex border-r">
        <div className="w-full">
          <div className="w-full h-8 px-3 items-center flex">
            <h6 className="text-gray-500 text-xs font-semibold leading-4">
              MENU
            </h6>
          </div>
          <ul className="flex-col gap-1 flex">
          <li>
                  <a href="javascript:;" onClick={toggleApplicationDetails}>
                    <div className="flex-col flex p-3 bg-white rounded-lg">
                      <div className="h-5 gap-3 flex items-center">
                        <div className="relative">
                        <ScrollText  className="h-6 w-6 text-slate-500" />
                        </div>
                        <Link to="/student/dashboard">
                        <h2 className="text-gray-500 text-sm font-medium leading-snug">
                          Application
                        </h2>
                        </Link>
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                      </div>
                    </div>
                  </a>
                </li>
            {isApplicationOpen && (
              <div className="flex-col gap-1 flex  bg-gray-100 rounded-lg p-0">
                {/* <h3 className="text-gray-700">Application Details</h3> */}
                <ul>
                  <Link to="/student/personal-details">                 <li className="flex items-center gap-6 px-4 py-2 text-slate-600">
                    <User /> Personal Details
                  </li>
                  </Link>
                  <Link to="/student/education-details">  
                  <li className="flex items-center gap-6 px-4 py-2 text-slate-600">
                    <Scroll /> Educational
                  </li>
                  </Link>
                  <Link to="/student/Document-details">
                  <li className="flex items-center gap-6 px-4 py-2 text-slate-600">
                    <CloudUploadIcon /> Upload Documents
                  </li>
                  </Link>
                  <li className="flex items-center gap-6 px-4 py-2 text-slate-600">
                    <ShieldCheck /> Verification
                  </li>
                </ul>
              </div>
            )}
            <li>
              <Link to="/student/choice-filling">
                           <a href="javascript:;">
                <div className="flex-col flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex items-center">
                    <div className="relative">
                    <MousePointer2 className="h-6 w-6 text-slate-500" />
                    </div>
                    <h2 className="text-gray-500 text-sm font-medium leading-snug">
                      Choice Filling
                    </h2>
                  </div>
                </div>
              </a>
              </Link>
 
            </li>
            <li>
              <a href="javascript:;">
                <div className="flex-col flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex items-center">
                    <div className="relative">
                    <CircleHelp className="h-6 w-6 text-slate-500" />
                    </div>
                    <h2 className="text-gray-500 text-sm font-medium leading-snug">
                      Help
                    </h2>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <div className="flex-col flex p-3 bg-white rounded-lg">
                  <div className="h-5 gap-3 flex items-center">
                    <div className="relative">
                    <LogOut className="h-6 w-6 text-slate-500" />
                    </div>
                    <h2 className="text-gray-500 text-sm font-medium leading-snug">
                      LogOut
                    </h2>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full p-3 rounded-lg border border-gray-300 absolute mt-[560px] -ml-4">
          <div className="w-full items-center flex">
            <div className="w-full justify-between items-center inline-flex">
              <div className="items-center flex">
                <img
                  className="rounded-lg w-10"
                  alt="Ronald image"
                  src={avtar}
                />
                <div className="flex-col inline-flex ml-2.5">
                  <h2 className="text-gray-700 text-sm font-semibold leading-snug">
                    Ankush Kumar
                  </h2>
                  <h6 className="text-black/20 text-xs font-normal leading-4">
                    Ankushkumar11903@gmail.com
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                <a href="javascript:;" className="w-5 h-5 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="More Vertical">
                      <path
                        id="icon"
                        d="M10.0156 14.9896V15.0396M10.0156 9.97595V10.026M10.0156 4.96228V5.01228"
                        stroke="black"
                        stroke-width="2.5"
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default StudentSidebar;
