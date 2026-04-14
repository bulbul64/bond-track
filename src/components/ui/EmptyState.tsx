import React from "react";
import { CalendarX } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-center py-20 px-6">
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <CalendarX className="w-7 h-7 text-muted-foreground" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">
        No interaction history yet
      </h2>

      {/* Description */}
      <p className="text-sm text-muted-foreground max-w-sm">
        Start interacting with your friends using call, text, or video check-ins.
        Your activity timeline will appear here.
      </p>
    </div>
  );
}