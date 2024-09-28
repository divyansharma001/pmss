import { noticeLabels } from "@/config";
import { Button } from "../ui/button";
import { Eye, Sparkles } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Notice() {
  return (
    <div className="w-[75%] my-4 rounded-lg bg-blue-900 flex gap-2 items-center justify-between text-center">
      {noticeLabels.map((labelItem) => {
        return (
          <div className="bg-blue-900 h-[180px] flex border-r border-white flex-col items-center m-4 p-8 text-white text-center">
            {labelItem.new ? <Sparkles /> : null}
            <p className="mt-1 mb-1"> {labelItem.label}</p>
            <Button className="bg-white text-black ">
              <Eye /> View More
            </Button>
          </div>
        );
      })}
    </div>
  );
}
// {noticeLabels.map((item)=><span>{item.label}</span>)}
