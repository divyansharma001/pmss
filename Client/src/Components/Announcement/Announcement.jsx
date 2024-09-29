import React from 'react'
import Select from '../Select/Select'

const Announcement = () => {
  return (
    <div className="border border-[#E0E0E0] w-full lg:w-[650px] xl:w-full h-auto min-h-[345px] rounded-md relative">
      <div className="p-4 flex justify-between">
        <div className="font-normal text-[18px]">Announcements</div>
        <div><Select/></div>
      </div>

      <div className="px-4 xl:px-6 space-y-3">
        {[
          { title: "Deadline for Application Submission", time: "5 Minutes ago", pinSrc: "./../public/pin.png" },
          { title: "Scholarship Committee Meeting", time: "Yesterday, 12:30 PM", pinSrc: "./../public/pin2.png" },
          { title: "New Scholarship Program for STEM Students", time: "Yesterday, 09:15 AM", pinSrc: "./../public/pin2.png" }
        ].map((item, index) => (
          <div key={index} className="bg-[#FAFAFA] border border-[#E0E0E0] h-auto min-h-[68px] w-full text-[#303030] p-4">
            <div className="flex justify-between items-center">
              <div>
                <div>{item.title}</div>
                <div className="text-[14px] text-[#686868]">{item.time}</div>
              </div>
              <div className="flex items-center">
                <div className="p-3">
                  <img src={item.pinSrc} alt="pin" className="w-6 h-6" />
                </div>
                <div className="p-2">
                  <img src="./../public/extra.png" alt="extra" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-[10px] border-t border-t-[#E0E0E0] text-[16px] text-[#FF5151] text-center rounded-b-md w-full mt-3">
        See All Announcement
      </div>
    </div>
  )
}

export default Announcement