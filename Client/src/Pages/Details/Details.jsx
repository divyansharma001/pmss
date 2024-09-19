import { BsMenuButtonWide } from "react-icons/bs";
import Select from "../../Components/Select/Select";
import Sidebar from "../../Components/Sidebar/Sidebar";

export const Details = () => {
  function openSidebar() {
    let sidebar = document.getElementById("sidebar");
    // console.dir(sidebar);
    // console.log(sidebar.classList);
    sidebar.className = "absolute left-0 flex items-start lg:hidden top-[68px] z-10"
  }
  function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    // console.dir(sidebar);
    // console.log(sidebar.classList);
    sidebar.className = "hidden"
  }
  return (
    <div className="sm:text-center sm:px-2">
      <div className="text-2xl font-semibold items-start p-[15px] lg:text-left text-left flex items-center gap-2 ">
        <button
          className="lg:hidden cursor-pointer"
          id="open"
          onClick={openSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span className="">Dashboard</span>
      </div>
      <div className="hidden"id="sidebar">
        <Sidebar />
        <button className="mt-2" id="close" onClick={closeSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4" id="abcd">
        <div className="lg:col-span-3 flex flex-wrap gap-5 justify-center lg:justify-start">
          <div className="sm:flex gap-2">
            <div className="h-[136px] w-[204px] bg-[#FFEFE7] rounded-md">
              <div className="p-3 font-normal text-start pl-5 text-base">
                Uploaded
              </div>
              <div className="text-4xl px-6 pl-5">24</div>
              <div className="text-[#FF5151] h-[24px] p-2 pl-5">
                4 needs action
              </div>
            </div>
            <div className="h-[136px] w-[204px] bg-[#E8F0FB] rounded-md">
              <div className="p-3 font-normal text-start pl-5 text-base">
                Approved
              </div>
              <div className="text-4xl px-6 pl-5">10</div>
              <div className="text-[#FF5151] h-[24px] p-2 pl-5">
                5 needs attention
              </div>
            </div>
            <div className="h-[136px] w-[204px] bg-[#FDEBF9] rounded-md">
              <div className="p-3 font-normal text-start pl-5 text-base">
                Needs Approval
              </div>
              <div className="text-4xl px-6 pl-5">4</div>
              <div className="text-[#FF5151] h-[24px] p-2 pl-5">4 Pending</div>
            </div>
          </div>

          <div className="w-full lg:w-[312px] h-[190px] border rounded-md border-[#E0E0E0] grid grid-cols-5">
            <div className="col-span-3">
              <div className="font-normal p-3 text-[18px] pl-5">
                Total Scholars
              </div>
              <div className="text-4xl p-1 pl-5 font-semibold">100</div>
              <div className="text-[#686868] text-[12px] p-1 pl-5">60 Men</div>
              <div className="text-[#686868] text-[12px] pl-5">40 Women</div>
            </div>
            <div className="mt-9 pr-4 col-span-2">
              <img src="./graph.png" alt="graph" />
            </div>
          </div>

          <div className="w-full lg:w-[320px] h-[190px] border rounded-md border-[#E0E0E0] grid grid-cols-5">
            <div className="col-span-3">
              <div className="font-normal p-3 text-[18px] pl-5">
                Total Requests
              </div>
              <div className="text-4xl p-1 pl-5 font-semibold">16K</div>
              <div className="text-[#686868] text-[12px] p-1 pl-5">6K Men</div>
              <div className="text-[#686868] text-[12px] pl-5">10K Women</div>
            </div>
            <div className="mt-9 pr-4 col-span-2">
              <img src="./graph2.png" alt="graph2" />
            </div>
          </div>

          <div className="border border-[#E0E0E0] w-full lg:w-[650px] h-[345px] rounded-md relative">
            <div className="p-4 flex justify-between">
              <div className="font-normal text-[18px]">Announcement</div>
              <div>
                <Select />
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>
                    Deadline for Application Submission
                    <div className="text-[14px] text-[#686868]">
                      5 Minutes ago
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin.png" alt="pin" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[68px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>
                    Scholarship Committee Meeting
                    <div className="text-[14px] text-[#686868]">
                      Yesterday, 12:30 PM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin2.png" alt="pin2" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[70px] w-full text-[#303030] pt-0 p-4">
                <div className="flex justify-between">
                  <div>
                    New Scholarship Program for STEM Students
                    <div className="text-[14px] text-[#686868]">
                      Yesterday, 09:15 AM
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-3">
                      <img src="./pin2.png" alt="pin2" />
                    </div>
                    <div className="p-2 mt-3">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[10px] border-t border-t-[#E0E0E0] text-[16px] text-[#FF5151] text-center rounded-b-md w-full">
              See All Announcement
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 px-2">
          <div className="w-full lg:w-[400px] h-[258px] bg-[#161E54] rounded-md ml-2">
            <div className="text-white text-[18px] p-[10px] bg-[#1B204A] rounded-t-md pl-5">
              Recently Activity
            </div>
            <div className="text-gray-400 text-[10px] pt-6 pl-5">
              10.40 AM, Fri 10 Sept 2024
            </div>
            <div className="text-[18px] text-white pl-5 pt-1">
              New Scholarship Program Posted
            </div>
            <div className="text-gray-300 text-[14px] pl-5 pr-10 pt-2">
              Please review the eligibility criteria and submission guidelines.
            </div>
            <div className="flex justify-between">
              <div className="text-white text-[14px] pl-5 pt-9">
                Today you made 12 activities
              </div>
              <div className="pr-8 pt-7">
                <BsMenuButtonWide className="text-white" />
              </div>
            </div>
          </div>

          <div className="border border-[#E0E0E0] w-full lg:w-[400px] h-[424px] rounded-md overflow-hidden mt-[30px] ml-2">
            <div className="p-4 flex justify-between">
              <div className="font-normal text-[18px] pl-2">
                Upcoming Deadlines
              </div>
              <div>
                <Select />
              </div>
            </div>

            <div className="pl-[25px] pt-2">
              <div className="text-[#686868] text-[12px] pl-0 pb-2">
                Priority
              </div>
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[60px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>Submit Application for PMSS</div>
                  <div className="flex">
                    <div className="text-[#FF5151] text-[12px] p-2">Urgent</div>
                    <div className="p-2 mt-2">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[60px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>Criteria for PMSS Scholarship</div>
                  <div className="flex">
                    <div className="p-2 mt-2">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[25px] pt-3">
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[60px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>Last date of document submission</div>
                  <div className="flex">
                    <div className="p-2 mt-2">
                      <img src="./extra.png" alt="extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[10px] border-t border-t-[#E0E0E0] text-[16px] text-[#FF5151] text-center rounded-b-md w-full">
              See All Schedules
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
