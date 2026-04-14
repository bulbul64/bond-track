

import Image from 'next/image';

import { Button } from '../ui/button';
import { Pencil, } from 'lucide-react';
import { Friend } from '@/types/friend';
import { getFriends } from '@/lib/getFriends';

type Props = {
  id: number | string;
};

export async function FriendCard({ id }: Props) {
 const friends = await getFriends();
  const friend = friends.find((f: Friend) => f.id == Number(id));

 

  const { name, status, picture, days_since_contact, tags, title, email } = friend!;
  return (
    <div className="flex flex-col items-center border w-full shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer">
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

