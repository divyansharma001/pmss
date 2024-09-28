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

export default function NoticeCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75%]"
    >
      <CarouselContent>
        {noticeLabels.map((label) => (
          <CarouselItem key={label} className="md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-blue-900 text-white text-center">
                <CardContent className="flex h-[180px] items-center justify-center p-6 flex-col">
                  {label.new ? (
                    <span>
                      <Sparkles className="mt-2" />
                    </span>
                  ) : null}
                  {label.label}
                  <Button className="mt-2">
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
  );
}
