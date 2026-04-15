'use client';

import { interactionHistoryContext } from '@/context/InteractionHistoryContext';
import { Interaction } from '@/types/friend';
import { useContext } from 'react';
import { motion } from 'framer-motion';

export default function InteractionAnalytics() {
  const context = useContext(interactionHistoryContext);
  if (!context) return null;

  const { state } = context;

  const history = (state.history || []) as Interaction[];

  const counts = history.reduce(
    (acc, item) => {
      if (item.action === 'call') acc.call++;
      else if (item.action === 'text') acc.text++;
      else if (item.action === 'video') acc.video++;
      return acc;
    },
    { call: 0, text: 0, video: 0 },
  );

  const { call, text, video } = counts;

  const total = call + text + video || 1;

  const callPercent = (call / total) * 100;
  const textPercent = (text / total) * 100;
  const videoPercent = (video / total) * 100;

  const gradient = `conic-gradient(
    #3b82f6 0% ${callPercent}%,
    #22c55e ${callPercent}% ${callPercent + textPercent}%,
    #a855f7 ${callPercent + textPercent}% 100%
  )`;

  const mostUsed =
    call >= text && call >= video ? 'Call' : text >= call && text >= video ? 'Text' : 'Video';

  const leastUsed =
    call <= text && call <= video ? 'Call' : text <= call && text <= video ? 'Text' : 'Video';

  const activityLevel =
    total < 5 ? 'Low Activity' : total < 15 ? 'Medium Activity' : 'High Activity';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-sm mx-auto mt-8 rounded-2xl border bg-white p-6 shadow-md"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Interaction Analytics</h2>

        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
        >
          {activityLevel}
        </motion.span>
      </div>

      <div className="flex justify-center items-center mb-6">
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 rounded-full flex items-center justify-center"
          style={{ background: gradient }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-inner"
          >
            <span className="text-xs text-gray-500">Total</span>
            <span className="text-2xl font-bold">{total}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-4">
        {[
          { label: 'Call', value: call, percent: callPercent, color: 'bg-blue-500' },
          { label: 'Text', value: text, percent: textPercent, color: 'bg-green-500' },
          { label: 'Video', value: video, percent: videoPercent, color: 'bg-purple-500' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-125 transition`}
              />
              <span className="text-sm">{item.label}</span>
            </div>
            <span className="text-sm font-medium">
              {item.value} ({Math.round(item.percent)}%)
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 text-center">
        <motion.div whileHover={{ scale: 1.03 }} className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500">Most Used</p>
          <p className="text-sm font-semibold">{mostUsed}</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="p-3 rounded-lg bg-gray-50">
          <p className="text-xs text-gray-500">Least Used</p>
          <p className="text-sm font-semibold">{leastUsed}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}