'use client';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { Interaction } from '@/types/friend';


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