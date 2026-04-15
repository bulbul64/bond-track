




import { Friend } from '@/types/friend';
import { getFriends } from '@/lib/getFriends';
import { FriendWidgets } from './friendsCard/FriendStatsWidget';


type Props = {
  id: number | string;
};

export async function FriendCard({ id }: Props) {
 const friends = await getFriends();
  const friend = friends.find((f: Friend) => f.id == Number(id));

 


  return (
   <FriendWidgets friend={friend} />
  );
}

