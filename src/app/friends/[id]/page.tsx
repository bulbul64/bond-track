import { FriendCard } from '@/components/friends/FriendCard';
import { FriendStatsCard } from '@/components/friends/friendsCard/FriendStatsCard';
import {
 
  RelationshipGoalCard,
} from '@/components/friends/friendsCard/FriendStatsWidget';
import { QuickCheckInCard } from '@/components/friends/QuickCheckInCard';
import Timeline from '@/components/friends/timeline';
import Btn from '@/components/ui/Btn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BondTrack — Track Your Relationships, Effortlessly',
  description:
    'A smart friendship management app to track interactions, manage relationships, and stay connected with the people who matter.',
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-1 space-y-3 pl-4 max-h-max">
              <FriendCard id={id} />
              <Btn />
            </div>
            <div className="col-span-2 max-h-max">
              <div className="h-24 overflow-y-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                  <FriendStatsCard id={id} />
                </div>
              </div>
              <RelationshipGoalCard />
              <QuickCheckInCard id={id} />

              <Timeline id={id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
