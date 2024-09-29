import { Bell, BotMessageSquare, Info, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import AICTE_Logo from "../../../public/logo_new.png";
import Moe_logo from "../../../public/MOE_logo.png"

export default function StudentDashBoardHeader() {
  return (
    <header className="flex border-b w-full bg-background items-center justify-between px-4 py-3 absolute top-0 z-10 shadow-md">
      {/* <h2 className="text-xl font-extrabold">PMSSS</h2> */}
      <div className="flex gap-2 items-center">
        <Link to="/">
          <img src={AICTE_Logo} alt="AICTE Logo" className="block h-[48px] cursor-pointer" />
        </Link>
        <Link to="/">
          <img src={Moe_logo} alt="AICTE Logo" className="block h-[48px] cursor-pointer" />
        </Link>
      </div>
      <div className="flex flex-1 gap-3 items-center justify-end cursor-pointer">
        <Info />
        <Bell />
        <BotMessageSquare />
        <Link to="/">
        <Button className="bg-orange-400 text-white border hover:bg-black hover:text-white hover:border-black inline-flex gap-2 rounded-md items-center">
          <LogOut />
          Logout
        </Button>
        </Link>
      </div>
    </header>
  );
}
