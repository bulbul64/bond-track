'use client';

import { Button } from '@/components/ui/button';

import { Friend, } from '@/types/friend';
import { Pencil } from 'lucide-react';
import Image from 'next/image';

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