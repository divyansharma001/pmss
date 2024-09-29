import Announcement from "@/Components/Announcement/Announcement";
import Example from "@/Components/Faq/Faq";
import ProgressBar from "@/Components/ProgressBar/ProgressBar";
import StudentSidebar from "@/Components/StudentDashboard/sidebar";
import ChoiceFilling from "@/Components/StudentDashboard/ChoiceFilling";
// toAccessThisPage/student/dashboard

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 p-4 gap-6 md:grid-cols-[300px_1fr] md:p-6 min-h-screen">
      {/* <StudentDashBoardSidebar /> */}
      <StudentSidebar/>
      <div className="bg-white w-full rounded-lg shadow-sm">
        {/* insertProgressbarComponentHere */}
        {/* <ProgressBar/> */}
        <div className="mt-10"><ChoiceFilling/></div>
        
      </div>
    </div>
  );
}
