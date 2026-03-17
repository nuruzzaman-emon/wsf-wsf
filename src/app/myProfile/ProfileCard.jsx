"use client";

import Image from "next/image";
import Link from "next/link";

const ProfileCard = ({ session }) => {
  console.log(session)
  

  return (
    <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden max-w-3xl mx-auto">
      {/* Cover */}
      <div className="h-36 bg-gradient-to-r from-primary to-secondary"></div>

      {/* Avatar */}
      <div className="flex justify-center -mt-16">
        <div className="relative w-32 h-32">
          <Image
            src={session?.image || "/user.png"}
            alt={session?.name || "session"}
            fill
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* session Info */}
      <div className="text-center p-6 space-y-3">
        <h2 className="text-2xl font-bold">{session?.name}</h2>

        <p className="text-gray-500">{session?.email}</p>

        <span className="badge badge-primary badge-lg capitalize">
          {session?.role}
        </span>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 px-6 pb-6">
        <div className="bg-base-200 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Account Status</p>
          <p className="font-semibold text-green-600">Active</p>
        </div>

        <div className="bg-base-200 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-semibold capitalize">{session?.role}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pb-8">
        <Link href="/myProfile/edit" className="btn btn-primary">
          Update Profile
        </Link>

        <Link href="/" className="btn btn-outline">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
