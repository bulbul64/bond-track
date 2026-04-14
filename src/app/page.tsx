import FriendCard from "@/components/friends/FriendsCard";
import Banner from "@/components/home/Banner";
import Stats from "@/components/stats/stats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BondTrack — Track Your Relationships, Effortlessly",
  description:
    "A smart friendship management app to track interactions, manage relationships, and stay connected with the people who matter.",
};
export default function Home() {
  return (
    <main>
      <Banner />
      <Stats />
      <FriendCard />
    </main>
  );
}
