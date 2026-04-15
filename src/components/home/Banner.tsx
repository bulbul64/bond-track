'use client';

import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  const heading = 'The People Who Matter, All in One Place.';
  const description =
    'Keep your meaningful connections close and organized. Never forget the moments, conversations, and bonds that truly count.';

  return (
    <div className="flex items-center justify-center px-6 mt-10">
      <div className="max-w-2xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          className="mt-5 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          className="mt-10 flex items-center justify-center"
        >
          <Button
            className="rounded-full text-sm px-6"
            asChild
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <UserPlus className="mr-2 h-4 w-4" />
              Get Started
            </motion.div>
          </Button>
        </motion.div>

      </div>
    </div>
  );
}