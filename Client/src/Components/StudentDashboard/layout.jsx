import { Outlet } from "react-router-dom";
import StudentDashBoardHeader from "./header";
import StudentDashBoardSidebar from "./sidebar";

export default function StudentDashBoardLayout() {
  return (
    <div className="flex flex-col bg-whtie min-h-screen overflow-hidden">
        {/* common header */}
        <StudentDashBoardHeader/>
        <main className="flex flex-col w-full min-h-screen">
            <Outlet/>
        </main>
    </div>
  );
}
