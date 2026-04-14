import Image from "next/image";
import { Button } from "../ui/button";
import {
  Pencil,
  Phone,
  RectangleEllipsis,
  Video,
} from "lucide-react";

/* =========================
   FRIEND CARD (STATIC)
========================= */
export function FriendCard() {
  const friend = {
    name: "John Doe",
    status: "Active",
    picture: "/avatar.jpg",
    days_since_contact: "12 days ago",
    tags: ["React", "Next.js"],
    title: "Frontend Developer",
    email: "john@example.com",
  };

  return (
    <div className="flex flex-col items-center border shadow-sm px-6 py-8 text-center hover:shadow-md transition">
      <Image
        alt={friend.name}
        src={friend.picture}
        width={120}
        height={120}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold text-lg">{friend.name}</h3>

      <p className="text-sm text-muted-foreground mt-1">
        {friend.days_since_contact}
      </p>

      <div className="mt-2 flex gap-2 flex-wrap justify-center">
        <span className="text-xs bg-muted px-2 py-1 rounded-full">
          {friend.tags[0]}
        </span>
        <span className="text-xs bg-muted px-2 py-1 rounded-full">
          {friend.tags[1]}
        </span>
      </div>

      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
        {friend.status}
      </span>

      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full">
        {friend.title}
      </span>

      <span className="text-xs bg-muted px-2 py-1 rounded-full mt-2">
        Preferred: {friend.email}
      </span>
    </div>
  );
}

/* =========================
   STATS CARD (STATIC)
========================= */
export const FriendStatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">John Doe</h1>
      <p className="text-sm text-muted-foreground">12 days ago</p>
    </div>
  );
};

/* =========================
   CONTACT METRICS (STATIC)
========================= */
export const ContactMetricsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">5 Contacts</h1>
      <p className="text-sm text-muted-foreground">This month</p>
    </div>
  );
};

/* =========================
   INSIGHT CARD (STATIC)
========================= */
export const FriendInsightCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">Strong Connection</h1>
      <p className="text-sm text-muted-foreground">Based on activity</p>
    </div>
  );
};

/* =========================
   RELATIONSHIP GOAL
========================= */
export const RelationshipGoalCard = () => {
  return (
    <div className="flex col-span-3 justify-between items-center border shadow-sm p-4">
      <div>
        <h1 className="text-2xl font-semibold">Relationship Goal</h1>
        <p className="text-sm text-muted-foreground">
          Connect every 30 days
        </p>
      </div>

      <Button>
        <Pencil />
        Edit
      </Button>
    </div>
  );
};

/* =========================
   QUICK CHECK IN
========================= */
export const QuickCheckInCard = () => {
  return (
    <div className="border shadow-md p-4 mt-3">
      <h4 className="font-semibold mb-3">Quick Check-in</h4>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-3 justify-center items-center border shadow-sm p-4">
          <Phone />
          <p className="text-sm text-muted-foreground">Call</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center border shadow-sm p-4">
          <RectangleEllipsis />
          <p className="text-sm text-muted-foreground">Text</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center border shadow-sm p-4">
          <Video />
          <p className="text-sm text-muted-foreground">Video</p>
        </div>
      </div>
    </div>
  );
};