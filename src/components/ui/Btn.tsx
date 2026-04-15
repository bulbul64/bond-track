'use client';

import { motion } from 'framer-motion';
import { BellRing, Archive, Trash2 } from 'lucide-react';
import { Button } from './button';
const btnClass =
  'w-full rounded-none h-10 flex items-center justify-center gap-2 text-sm cursor-pointer';

export default function Btn() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Button className={btnClass}>
          <BellRing /> Snooze 2 weeks
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Button className={btnClass}>
          <Archive /> Archive
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Button className={btnClass}>
          <Trash2 /> Delete
        </Button>
      </motion.div>
    </>
  );
}
