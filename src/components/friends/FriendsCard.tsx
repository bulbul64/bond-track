"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Friend } from '@/types/friend';
import { useEffect, useState } from 'react';

const FriendCard =  () => {

 const [data, setData] = useState<Friend[]>([]);

  // console.log(data)
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
        <h2 className="mt-3 font-satoshi font-semibold text-4xl tracking-tighter sm:text-5xl">
          {heading}
        </h2>
        <p className="mt-6 text-base text-muted-foreground sm:text-xl">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse sm:justify-center">
          <Button size="lg">Add Friend</Button>
          <Button size="lg" variant="outline">
            View Timeline
          </Button>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((friend: Friend) => {
          const { id, name, status, picture, days_since_contact, tags } = friend;

          return (
            <Link
              href={`/friends/${id}`}
              key={id || name}
              className="flex  flex-col items-center rounded-xl bg-accent px-6 py-8 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <Image
                alt={name}
                src={picture}
                width={120}
                height={120}
                className="h-20 w-20  rounded-full object-cover"
              />

              <h3 className="mt-4 font-semibold text-lg">{name}</h3>

              <p className="text-sm text-muted-foreground mt-1">{days_since_contact} days ago</p>

              <div className="mt-2 flex gap-2 flex-wrap justify-center">
                {tags?.map((tag: string, i: number) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <span
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
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FriendCard;
