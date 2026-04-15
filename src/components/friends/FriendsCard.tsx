'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Friend } from '@/types/friend';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FriendCard = () => {
  const [data, setData] = useState<Friend[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/data/friends.json');
      const data = await res.json();
      setData(data);
    };

    getData();
  }, []);

  const heading = 'Your Connections';

  const description =
    'Stay on top of your relationships by tracking when you last connected and when to reach out next.';

  return (
    <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col justify-center gap-16 px-6 py-8 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-2xl text-center">

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mt-3 font-satoshi font-semibold text-4xl tracking-tighter sm:text-5xl"
  >
    {heading}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
    className="mt-6 text-base text-muted-foreground sm:text-xl"
  >
    {description}
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
    className="mt-8 flex flex-col gap-3 sm:flex-row-reverse sm:justify-center"
  >
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Button size="lg">Add Friend</Button>
    </motion.div>

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Button size="lg" variant="outline">
        View Timeline
      </Button>
    </motion.div>
  </motion.div>

</div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {data.map((friend: Friend, index) => {
          const { id, name, status, picture, days_since_contact, tags } = friend;

          return (
            <motion.div
              key={id || name}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >

              <Link
                href={`/friends/${id}`}
                className="flex flex-col items-center rounded-xl bg-accent px-6 py-8 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >

                <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 200 }}>
                  <Image
                    alt={name}
                    src={picture}
                    width={120}
                    height={120}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </motion.div>

                <h3 className="mt-4 font-semibold text-lg">{name}</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  {days_since_contact} days ago
                </p>

                <div className="mt-2 flex gap-2 flex-wrap justify-center">
                  {tags?.map((tag: string, i: number) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`mt-2 text-xs font-medium px-3 py-1 rounded-full
                    ${
                      status === 'overdue'
                        ? 'bg-red-100 text-red-600'
                        : status === 'almost due'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-green-100 text-green-600'
                    }
                  `}
                >
                  {status}
                </motion.span>

              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendCard;