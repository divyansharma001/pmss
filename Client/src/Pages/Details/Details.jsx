import React from 'react'
import { BsMenuButtonWide } from 'react-icons/bs'
import Select from '../../Components/Select/Select'

export const Details = () => {
  return (
    <div>
      <div className="text-2xl font-semibold items-start p-[15px]">
        Dashboard
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 flex flex-wrap gap-5 justify-center lg:justify-start">
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
              <div><Select/></div>
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

        <div className="lg:col-span-2">
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
                <BsMenuButtonWide className='text-white' />
              </div>
            </div>
          </div>

          <div className="border border-[#E0E0E0] w-full lg:w-[400px] h-[424px] rounded-md overflow-hidden mt-[30px] ml-2">
            <div className="p-4 flex justify-between">
              <div className="font-normal text-[18px] pl-2">
              Upcoming Deadlines
              </div>
              <div><Select/></div>
            </div>

            <div className="pl-[25px] pt-2">
              <div className="text-[#686868] text-[12px] pl-0 pb-2">
                Priority
              </div>
              <div className="bg-[#FAFAFA] border border-[#E0E0E0] h-[60px] w-full text-[#303030] pt-3 p-4">
                <div className="flex justify-between">
                  <div>Submit Application for PMSS</div>
                  <div className="flex">
                    <div className="text-[#FF5151] text-[12px] p-2">
                      Urgent
                    </div>
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
  )
}
