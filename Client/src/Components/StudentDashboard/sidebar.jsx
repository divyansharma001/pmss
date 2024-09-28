import { FileInput, List, ListCollapse, Scroll, ShieldCheck, User, Vote } from "lucide-react";
import { Fragment } from "react";

const studentSidebarMenuItems = [
  {
    id: "personalDetail",
    label: "Personal Detail",
    path: "",
    icon: <ListCollapse />,
  },
  {
    id: "educationalDetails",
    label: "Educational Details",
    path: "",
    icon: <Scroll />,
  },
  {
    id: "uploadDocuments",
    label: "Upload Documents",
    path: "",
    icon: <FileInput />,
  },
  {
    id: "verification",
    label: "Verification",
    path: "",
    icon: <ShieldCheck />,
  },
  {
    id: "choiceFilling",
    label: "Choice Filling",
    path: "",
    icon: <List/>,
  },
  {
    id: "couselling",
    label: "Counselling",
    path: "",
    icon:<Vote />,
  },
  
];

function MenuItems() {
  return (
    <nav className="mt-4 flex-col flex-gap-2">
      {studentSidebarMenuItems.map((menuItem) => {
        return (
          <div
            key={menuItem.id}
            className={
              "flex cursor-pointer text-md items-center gap-2 rounded-md px-3 py-3 text-muted-foreground hover:bg-slate-100"
            }
          >
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

export default function StudentDashBoardSidebar() {
  return (
    <Fragment>
      <aside className="w-64 flex-col border-r bg-background p-6 flex">
        <div className="border-b">
          <div className="flex items-center gap-2 text-lg font-bold mb-2 cursor-pointer">
            <User size={30}/>
            Student
          </div>
        </div>
        <MenuItems/>
      </aside>
    </Fragment>
  );
}
