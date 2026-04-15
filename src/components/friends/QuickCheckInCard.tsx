'use client';

import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { Action, Friend } from '@/types/friend';
import { Phone, RectangleEllipsis, Video } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const QuickCheckInCard = ({ id }: { id: number | string }) => {
  const [data, setData] = useState<Friend[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/data/friends.json');
      const data = await res.json();
      setData(data);
    };

    getData();
  }, []);

  const friend = data?.find((f: Friend) => f.id === Number(id));

  const context = useContext(interactionHistoryContext);

  if (!context) return null;
  if (!friend) return <div>Loading...</div>;

  const { addInteraction } = context;

  const iconAndText = [
    { icon: <Phone />, title: "Call", action: "call" },
    { icon: <RectangleEllipsis />, title: "Text", action: "text" },
    { icon: <Video />, title: "Video", action: "video" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="border shadow-md p-4 mt-3"
    >
      <h4 className="font-semibold mb-3">Quick Check-in</h4>

      <div className="grid grid-cols-3 gap-4">
        {iconAndText.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addInteraction(friend, item.action as Action)}
            className="cursor-pointer flex flex-col gap-3 justify-center items-center border shadow-sm p-4"
          >
            {item.icon}
            <p className="text-sm text-muted-foreground">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};