import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Pencil, Phone, RectangleEllipsis, Video } from 'lucide-react';
import { Friend } from '@/types/friend';
type Props = {
  id: number | string;
};

export async function FriendCard({ id }: Props) {
  const res = await fetch('http://localhost:3000/data/friends.json', {
    cache: 'no-store',
  });

  const friends = await res.json();
  const friend = friends.find((f: Friend) => f.id == Number(id));

  console.log(friend);

  const { name, status, picture, days_since_contact, tags, title, email } = friend!;
  return (
    <div className="flex flex-col items-center border shadow-sm px-6 py-8 text-center hover:shadow-md transition cursor-pointer">
      <Image
        alt={name}
        src={picture}
        width={120}
        height={120}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold text-lg">{name}</h3>

      <p className="text-sm text-muted-foreground mt-1"> {days_since_contact} 12 days ago</p>

      <div className="mt-2 flex gap-2 flex-wrap justify-center">
        <span className="text-xs bg-muted px-2 py-1 rounded-full">{tags[0]}</span>
        <span className="text-xs bg-muted px-2 py-1 rounded-full">{tags[1]}</span>
      </div>

      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
        {status}
      </span>
      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full ">{title}</span>

      <span className="text-xs bg-muted px-2 py-1 rounded-full"> Preferred: {email || 'None'}</span>
    </div>
  );
}

export const FriendStatsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">John Doe</h1>
      <p className="text-sm text-muted-foreground">12 days ago</p>
    </div>
  );
};

export const ContactMetricsCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">John Doe</h1>
      <p className="text-sm text-muted-foreground">12 days ago</p>
    </div>
  );
};

export const FriendInsightCard = () => {
  return (
    <div className="flex flex-col justify-center items-center border shadow-sm p-4">
      <h1 className="text-2xl font-semibold">John Doe</h1>
      <p className="text-sm text-muted-foreground">12 days ago</p>
    </div>
  );
};

export const RelationshipGoalCard = () => {
  return (
    <div className="flex col-span-3 justify-between items-center border shadow-sm p-4">
      <div>
        {' '}
        <h1 className="text-2xl font-semibold">Relationship Goal</h1>
        <p className="text-sm text-muted-foreground">Connect every 30 days</p>
      </div>
      <Button>
        <Pencil /> Edit
      </Button>
    </div>
  );
};

export const QuickCheckInCard = () => {
  return (
    <div className="border shadow-md p-4 mt-3">
      <h4 className="font-semibold mb-3">Quick Check-in</h4>
      <div className="grid grid-cols-3 gap-4 ">
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
