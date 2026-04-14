import {
  ContactMetricsCard,
  FriendCard,
  FriendInsightCard,
  FriendStatsCard,
  RelationshipGoalCard,
} from '@/components/friends/FriendCard';
import { QuickCheckInCard } from '@/components/friends/QuickCheckInCard';
import Timeline from '@/components/friends/timeline';
import { Button } from '@/components/ui/button';
import { Archive, BellRing, Trash2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BondTrack — Track Your Relationships, Effortlessly',
  description:
    'A smart friendship management app to track interactions, manage relationships, and stay connected with the people who matter.',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

 

  const btnClass = 'w-full rounded-none h-10 flex items-center justify-center gap-2 text-sm cursor-pointer';


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-1  max-h-max">
              <FriendCard id={id}/>
              <Button className={btnClass}>
                <BellRing /> Snooze 2 weeks{' '}
              </Button>
              <Button className={btnClass}>
                <Archive /> Archive{' '}
              </Button>
              <Button className={btnClass}>
                <Trash2 /> Delete{' '}
              </Button>
            </div>
            <div className="col-span-2 max-h-max">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                <FriendStatsCard  />
                <ContactMetricsCard />
                <FriendInsightCard />
                <RelationshipGoalCard />
              </div>
              <QuickCheckInCard id={id} />

            <Timeline />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
