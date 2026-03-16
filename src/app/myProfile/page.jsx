"use client";

import { useSession } from "next-auth/react";
import ProfileCard from "./ProfileCard";

export default function MyProfile() {
  const { data: session } = useSession();
 
  const user = session?.user;

  if (!user) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <ProfileCard session={session} />
    </div>
  );
}
