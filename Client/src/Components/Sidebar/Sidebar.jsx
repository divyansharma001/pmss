import React from 'react'
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { IoDocumentLockOutline } from "react-icons/io5"
import { FaRegNewspaper } from "react-icons/fa";
import { BsChatRightDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
    <div className="xl:w-96 w-80 xl:p-4 p-2 bg-white flex-col justify-start items-start gap-5 inline-flex border-r">
      
      <div className="w-full p-3 rounded-lg border border-gray-300">
          <div className="w-full items-center flex">
              <div className="w-full justify-between items-center inline-flex">
                  <div className="items-center flex">
                      <img className="rounded-lg" alt="Ronald image" src="https://pagedone.io/asset/uploads/1701235464.png" />
                      <div className="flex-col inline-flex ml-2.5">
                          <h2 className="text-gray-700 text-sm font-semibold leading-snug">Rahul Sharma</h2>
                          <h6 className="text-black/20 text-xs font-normal leading-4">rahul11@gmail.com</h6>
                      </div>
                  </div>
                  <div className="flex items-center">
                      <a href="javascript:;" className="w-5 h-5 relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <g id="More Vertical">
                                  <path id="icon" d="M10.0156 14.9896V15.0396M10.0156 9.97595V10.026M10.0156 4.96228V5.01228" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                              </g>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div className="w-full">
          <div className="w-full h-8 px-3 items-center flex">
              <h6 className="text-gray-500 text-xs font-semibold leading-4">MENU</h6>
          </div>
          <ul className="flex-col gap-1 flex">
              <li>
                  <a href="javascript:;">
                      <div className="flex-col flex p-3 bg-white rounded-lg">
                          <div className="h-5 gap-3 flex">
                              <div className="relative">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                      <g id="category 02">
                                          <g id="icon">
                                              <path d="M2.5 5.41667C2.5 3.80584 3.80584 2.5 5.41667 2.5C7.0275 2.5 8.33333 3.80584 8.33333 5.41667C8.33333 7.0275 7.0275 8.33333 5.41667 8.33333C3.80584 8.33333 2.5 7.0275 2.5 5.41667Z" stroke="#6B7280" stroke-width="1.6" />
                                              <path d="M11.6667 5.41667C11.6667 4.24628 11.6667 3.66109 11.9476 3.24072C12.0691 3.05873 12.2254 2.90248 12.4074 2.78088C12.8278 2.5 13.4129 2.5 14.5833 2.5C15.7537 2.5 16.3389 2.5 16.7593 2.78088C16.9413 2.90248 17.0975 3.05873 17.2191 3.24072C17.5 3.66109 17.5 4.24628 17.5 5.41667C17.5 6.58705 17.5 7.17224 17.2191 7.59262C17.0975 7.7746 16.9413 7.93085 16.7593 8.05245C16.3389 8.33333 15.7537 8.33333 14.5833 8.33333C13.4129 8.33333 12.8278 8.33333 12.4074 8.05245C12.2254 7.93085 12.0691 7.7746 11.9476 7.59262C11.6667 7.17224 11.6667 6.58705 11.6667 5.41667Z" stroke="#6B7280" stroke-width="1.6" />
                                              <path d="M11.6667 14.5833C11.6667 12.9725 12.9725 11.6667 14.5833 11.6667C16.1942 11.6667 17.5 12.9725 17.5 14.5833C17.5 16.1942 16.1942 17.5 14.5833 17.5C12.9725 17.5 11.6667 16.1942 11.6667 14.5833Z" stroke="#6B7280" stroke-width="1.6" />
                                              <path d="M2.5 14.5833C2.5 13.4129 2.5 12.8278 2.78088 12.4074C2.90248 12.2254 3.05873 12.0691 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0691 7.93085 12.2254 8.05245 12.4074C8.33333 12.8278 8.33333 13.4129 8.33333 14.5833C8.33333 15.7537 8.33333 16.3389 8.05245 16.7593C7.93085 16.9413 7.7746 17.0975 7.59262 17.2191C7.17224 17.5 6.58705 17.5 5.41667 17.5C4.24628 17.5 3.66109 17.5 3.24072 17.2191C3.05873 17.0975 2.90248 16.9413 2.78088 16.7593C2.5 16.3389 2.5 15.7537 2.5 14.5833Z" stroke="#6B7280" stroke-width="1.6" />
                                          </g>
                                      </g>
                                  </svg>
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Dashboard</h2>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="flex-col gap-1 flex">
                          <div className="flex-col flex p-3 bg-white rounded-lg">
                              <div className="h-5 gap-3 flex">
                                  <div className="relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <g id="Swap">
                                              <path id="icon" d="M2.50325 9.00193C2.50145 5.42312 5.40119 2.52045 8.98001 2.51865M8.99678 2.5L7.25783 4.94982M17.5 10.9172C17.5 14.496 14.5988 17.3972 11.02 17.3972M11.0022 17.4161L12.7423 14.9671M14.5833 8.3334C12.9725 8.3334 11.6667 7.02756 11.6667 5.41673C11.6667 3.8059 12.9725 2.50006 14.5833 2.50006C16.1942 2.50006 17.5 3.8059 17.5 5.41673C17.5 7.02756 16.1942 8.3334 14.5833 8.3334ZM5.41667 17.5001C4.24628 17.5001 3.66109 17.5001 3.24072 17.2192C3.05873 17.0976 2.90248 16.9413 2.78088 16.7593C2.5 16.339 2.5 15.7538 2.5 14.5834C2.5 13.413 2.5 12.8278 2.78088 12.4074C2.90248 12.2255 3.05873 12.0692 3.24072 11.9476C3.66109 11.6667 4.24628 11.6667 5.41667 11.6667C6.58705 11.6667 7.17224 11.6667 7.59262 11.9476C7.7746 12.0692 7.93085 12.2255 8.05245 12.4074C8.33333 12.8278 8.33333 13.413 8.33333 14.5834C8.33333 15.7538 8.33333 16.339 8.05245 16.7593C7.93085 16.9413 7.7746 17.0976 7.59262 17.2192C7.17224 17.5001 6.58705 17.5001 5.41667 17.5001Z" stroke="#6B7280" stroke-width="1.60274" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                      </svg>
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">FAQs</h2>
                              </div>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <div className="flex-col flex">
                      <div className="flex-col flex p-3 bg-white rounded-lg">
                          <div className="justify-between inline-flex">
                              <a href="javascript:;" className="h-5 gap-3 flex">
                                  <div className="relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <g id="Upload 02">
                                              <path id="icon" d="M8.1475 12.6968L9.99935 10.8333L11.8512 12.6968M9.99935 17.5V10.8795M5.36972 13.6805H4.92701C3.12601 13.6805 1.66602 12.2205 1.66602 10.4196C1.66602 8.61855 3.12601 7.15855 4.92701 7.15855V7.15855C5.17151 7.15855 5.36753 6.95973 5.39031 6.71629C5.61168 4.35087 7.59071 2.5 9.99935 2.5C12.5562 2.5 14.629 4.5857 14.629 7.15855H15.0717C16.8727 7.15855 18.3327 8.61855 18.3327 10.4196C18.3327 12.2205 16.8727 13.6805 15.0717 13.6805H14.629" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" />
                                          </g>
                                      </svg>
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">Upload Documents</h2>
                              </a>
                              <a href="javascript:;" className="flex items-center gap-3">
                                  <div className="px-2.5 py-0.5 bg-indigo-100 rounded-3xl">
                                      <h6 className="text-indigo-600 text-xs font-medium leading-4">12</h6>
                                  </div>
                                  <div className="relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                          <g id="Right arrow 4">
                                              <path id="icon" d="M6.00236 3.99719L10.0025 7.99736L6 11.9999" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                      </svg>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="flex-col gap-1 flex">
                          <div className="flex-col flex bg-white rounded-lg p-3">
                              <div className="h-5 gap-3 flex">
                                  <div className="relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <g id="Cube 01">
                                              <path id="icon" d="M2.78223 5.83329C2.52965 6.27072 2.52543 6.80097 2.517 7.86146L2.5 9.99996L2.517 12.1385C2.52543 13.199 2.52965 13.7292 2.78223 14.1666C3.03481 14.6041 3.49196 14.8728 4.40627 15.4104L6.25 16.4943L8.11073 17.5489C9.03347 18.0718 9.49484 18.3333 10 18.3333M2.78223 5.83329C3.03481 5.39587 3.49196 5.12709 4.40627 4.58955L6.25 3.50557L8.11073 2.45104C9.03347 1.9281 9.49484 1.66663 10 1.66663C10.5052 1.66663 10.9665 1.9281 11.8893 2.45104L13.75 3.50557L15.5937 4.58955C16.508 5.12709 16.9652 5.39587 17.2178 5.83329M2.78223 5.83329L10 9.99996M10 18.3333C10.5052 18.3333 10.9665 18.0718 11.8893 17.5489L13.75 16.4943L15.5937 15.4104C16.508 14.8728 16.9652 14.6041 17.2178 14.1666C17.4704 13.7292 17.4746 13.199 17.483 12.1385L17.5 9.99996L17.483 7.86146C17.4746 6.80097 17.4704 6.27072 17.2178 5.83329M10 18.3333V9.99996M17.2178 5.83329L10 9.99996" stroke="#6B7280" stroke-width="1.6" />
                                          </g>
                                      </svg>
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">Candidates Applied</h2>
                              </div>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="flex-col gap-1 flex">
                          <div className="flex-col flex bg-white rounded-lg p-3">
                              <div className="h-5 gap-3 flex">
                                  <div className="relative">
                                  <FiUserCheck/>
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">Candidates Approved</h2>
                              </div>
                          </div>
                      </div>
                  </a>
              </li>


              <li>
                  <a href="javascript:;">
                      <div className="flex-col gap-1 flex">
                          <div className="flex-col flex bg-white rounded-lg p-3">
                              <div className="h-5 gap-3 flex">
                                  <div className="relative">
                                  <FiUserX />
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">Candidates Declined</h2>
                              </div>
                          </div>
                      </div>
                  </a>
              </li>


              <li>
                  <a href="javascript:;">
                      <div className="flex-col gap-1 flex">
                          <div className="flex-col flex bg-white rounded-lg p-3">
                              <div className="h-5 gap-3 flex">
                                  <div className="relative">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                          <g id="Screenshot">
                                              <path id="icon" d="M6.66667 2.5H5.83333C4.26198 2.5 3.47631 2.5 2.98816 2.98816C2.5 3.47631 2.5 4.26198 2.5 5.83333V6.66667M13.3333 2.5H14.1667C15.738 2.5 16.5237 2.5 17.0118 2.98816C17.5 3.47631 17.5 4.26198 17.5 5.83333V6.66667M2.5 13.3333V14.1667C2.5 15.738 2.5 16.5237 2.98816 17.0118C3.47631 17.5 4.26198 17.5 5.83333 17.5H6.66667M17.5 13.3333V14.1667C17.5 15.738 17.5 16.5237 17.0118 17.0118C16.5237 17.5 15.738 17.5 14.1667 17.5H13.3333M11.3886 10.5556C11.3886 11.3226 10.7668 11.9444 9.99973 11.9444C9.23267 11.9444 8.61084 11.3226 8.61084 10.5556C8.61084 9.78849 9.23267 9.16667 9.99973 9.16667C10.7668 9.16667 11.3886 9.78849 11.3886 10.5556ZM14.1667 8.59776V10.8333C14.1667 12.4047 14.1667 13.1904 13.6785 13.6785C13.1904 14.1667 12.4047 14.1667 10.8333 14.1667H9.16667C7.59532 14.1667 6.80964 14.1667 6.32149 13.6785C5.83333 13.1904 5.83333 12.4047 5.83333 10.8333V8.59776C5.83333 7.80461 6.43421 7.14045 7.22339 7.06129L7.57187 7.02633C7.92642 6.99077 8.2323 6.76218 8.36686 6.43223C8.51456 6.07007 8.86678 5.83333 9.2579 5.83333H10.7421C11.1332 5.83333 11.4854 6.07007 11.6331 6.43223C11.7677 6.76218 12.0736 6.99077 12.4281 7.02633L12.7766 7.06129C13.5658 7.14045 14.1667 7.80461 14.1667 8.59776Z" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                          </g>
                                      </svg>
                                  </div>
                                  <h2 className="text-gray-500 text-sm font-medium leading-snug">Scan Documents</h2>
                              </div>
                          </div>
                      </div>
                  </a>
              </li>


              
          </ul>
      </div>
     
      <div className="w-full flex-col flex">
          <div className="h-8 px-3 items-center inline-flex">
              <h6 className="text-gray-500 text-xs font-semibold leading-4">SETTINGS</h6>
          </div>
          <ul className="flex-col gap-1 flex">
              <li>
                  <a href="javascript:;">
                      <div className="p-3 rounded-lg items-center inline-flex">
                          <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                      <g id="User Circle">
                                          <path id="icon" d="M5.5 16C5.5 13.9289 7.51472 12.25 10 12.25C12.4853 12.25 14.5 13.9289 14.5 16M12.25 7.75C12.25 8.99264 11.2426 10 10 10C8.75736 10 7.75 8.99264 7.75 7.75C7.75 6.50736 8.75736 5.5 10 5.5C11.2426 5.5 12.25 6.50736 12.25 7.75ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#6B7280" stroke-width="1.6" />
                                      </g>
                                  </svg>
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Profile</h2>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="p-3 rounded-lg items-center inline-flex">
                          <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                              <IoDocumentLockOutline />
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Your Documents</h2>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="p-3 rounded-lg items-center inline-flex">
                          <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                              <FaRegNewspaper />
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Notifications</h2>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="p-3 rounded-lg items-center inline-flex">
                          <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                              <BsChatRightDots />
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Chat with us</h2>
                          </div>
                      </div>
                  </a>
              </li>
              <li>
                  <a href="javascript:;">
                      <div className="p-3 rounded-lg items-center inline-flex">
                          <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                      <g id="Logout">
                                          <path id="icon" d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V14.1667L2.5 5.83333V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333" stroke="#6B7280" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                      </g>
                                  </svg>
                              </div>
                              <h2 className="text-gray-500 text-sm font-medium leading-snug">Logout</h2>
                          </div>
                      </div>
                  </a>
              </li>
          </ul>
      </div>
      </div>
    </>
  )
}

export default Sidebar