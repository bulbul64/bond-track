import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function Banner() {

  const heading = 'The People Who Matter, All in One Place.';
  const description = 'Keep your meaningful connections close and organized. Never forget the moments, conversations, and bonds that truly count.';

  return (
    <div className="flex items-center justify-center px-6 mt-10">
      <div className="max-w-2xl text-center">
        
        <h1 className="text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
          {heading}
        </h1>

        <p className="mt-5 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
          {description}
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Button className="rounded-full text-sm px-6">
            <UserPlus className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>

      </div>
    </div>
  );
}