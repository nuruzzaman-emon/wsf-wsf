"use client";

import Image from "next/image";
import Link from "next/link";

const ProfileCard = ({ session }) => {
    console.log(session?.user?.image)
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center max-w-3xl mx-auto">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
        <Image
          src={session?.user?.image || "/user.png"}
          alt={session?.user?.name || "User"}
          fill
          className="rounded-full object-cover border-4 border-primary shadow-lg"
        />
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {session?.user?.name}
        </h2>

        <p className="text-gray-500 text-lg">{session?.email}</p>

        <span className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1 rounded-full uppercase text-sm">
          {session?.role}
        </span>

        <div className="pt-4">
          <Link
            href="/myProfile/edit"
            className="btn btn-primary px-6 py-2 text-base hover:scale-105 transition-transform"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
