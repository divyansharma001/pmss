import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { noticeLabels } from "@/config";
import { Button } from "../ui/button";
import { Eye, Sparkles } from "lucide-react";
import flowchart from "../../assets/new.gif"

export default function NoticeCarousel() {
  return (
    <div className="bg-red-50 p-14   items-center">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75%] ml-56 -z-0"
    >
      <CarouselContent>
        {noticeLabels.map((label) => (
          <CarouselItem key={label} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-blue-900 text-white text-center">
                <CardContent className="flex h-[180px] items-center justify-center p-6 flex-col">
                  {label.new ? (
                    <span>
                      <img src={flowchart} className="-mt-6 w-20" />
                    </span>
                  ) : null}
                  {label.label}
                  <Button className="mt-2 hover:shadow-xl hover:bg-white hover:text-black">
                    <Eye /> View More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}
