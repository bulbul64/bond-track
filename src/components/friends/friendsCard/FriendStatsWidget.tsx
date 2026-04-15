'use client';

import { Button } from '@/components/ui/button';
import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { Friend, Interaction } from '@/types/friend';
import { Pencil } from 'lucide-react';
import Image from 'next/image';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export function FriendWidgets({ friend }: { friend: Friend }) {
  const { name, status, picture, days_since_contact, tags, title, email } = friend!;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-center border w-full shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer"
    >
      <Image
        alt={name}
        src={picture}
        width={120}
        height={120}
        className="h-20 w-20 rounded-full object-cover"
      />

      <h3 className="mt-4 font-semibold text-lg">{name}</h3>

      <p className="text-sm text-muted-foreground mt-1">
        {days_since_contact} 12 days ago
      </p>

      <div className="mt-2 flex gap-2 flex-wrap justify-center">
        <span className="text-xs bg-muted px-2 py-1 rounded-full">{tags[0]}</span>
        <span className="text-xs bg-muted px-2 py-1 rounded-full">{tags[1]}</span>
      </div>

      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
        {status}
      </span>

      <span className="mt-2 text-xs font-medium px-3 py-1 rounded-full ">
        {title}
      </span>

      <span className="text-xs bg-muted px-2 py-1 rounded-full">
        Preferred: {email || 'None'}
      </span>
    </motion.div>
  );
}

function formatTimeAgo(time: string) {
  const now = Date.now();
  const past = new Date(time).getTime();

  const diffInSeconds = (now - past) / 1000;

  const seconds = diffInSeconds;
  const minutes = diffInSeconds / 60;
  const hours = diffInSeconds / 3600;
  const days = diffInSeconds / 86400;

  if (seconds < 60) return `${Math.floor(seconds)} seconds ago`;
  if (minutes < 60) return `${Math.floor(minutes)} minutes ago`;
  if (hours < 24) return `${Math.floor(hours)} hours ago`;
  return `${Math.floor(days)} days ago`;
}

export const FriendStatsCard = () => {
  const context = useContext(interactionHistoryContext);

  if (!context) return null;
  const { state } = context;
  const history = (state.history || []) as Interaction[];
  if (history.length === 0) return <p>No history</p>;

  return (
    <>
      {history.map((item, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex flex-col justify-center items-center border shadow-sm p-4"
        >
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <p className="text-sm text-muted-foreground">
            {formatTimeAgo(item.time)}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export const RelationshipGoalCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex col-span-3 justify-between items-center border shadow-sm p-4"
    >
      <div>
        <h1 className="text-2xl font-semibold">Relationship Goal</h1>
        <p className="text-sm text-muted-foreground">
          Connect every 30 days
        </p>
      </div>

      <Button>
        <Pencil /> Edit
      </Button>
    </motion.div>
  );
};