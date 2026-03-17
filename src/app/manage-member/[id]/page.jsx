import Image from "next/image";
import { ObjectId } from "mongodb";
import { collections, connect } from "@/lib/dbConnect";
import Link from "next/link";

const MemberProfile = async ({ params }) => {
  const { id } = await params;
  const usersCollection = connect(collections.USERS);
  await connect();
  const member = await usersCollection.findOne({
    _id: new ObjectId(id),
  });

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Profile Card */}
      <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Cover */}
        <div className="h-40 bg-gradient-to-r from-primary to-secondary"></div>

        {/* Profile Info */}
        <div className="px-8 pb-8">
          {/* Avatar */}
          <div className="flex flex-col items-center -mt-16">
            <Image
              src={member?.image || "/logoo.png"}
              alt={member?.name || "User"}
              width={120}
              height={120}
              className="rounded-full border-4 border-white object-cover"
            />

            <h2 className="text-2xl font-bold mt-3">
              {member?.name || "Member"}
            </h2>

            <span className="badge badge-primary mt-2">{member?.role}</span>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-base-200 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold">{member?.email}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold capitalize">{member?.role}</p>
            </div>

            <div className="bg-base-200 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Joined</p>
              <p className="font-semibold">
                {new Date(member?.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Account Status</p>
              <p className="font-semibold text-green-600">Active</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-8">
            <Link href={"/"} className="btn btn-primary">Home</Link>
            <Link href={"/manage-member"} className="btn btn-outline">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
