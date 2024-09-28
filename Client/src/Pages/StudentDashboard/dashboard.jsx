import StudentDashBoardSidebar from "@/Components/StudentDashboard/sidebar";
// toAccessThisPage/student/dashboard

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 p-4 gap-6 md:grid-cols-[300px_1fr] md:p-6 min-h-screen">
      <StudentDashBoardSidebar />
      <div className="bg-blue-100 w-full rounded-lg shadow-sm">
        {/* insertProgressbarComponentHere */}
      </div>
    </div>
  );
}
