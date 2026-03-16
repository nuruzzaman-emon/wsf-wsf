import { collections, connect } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Impact",
  description:
    "See the impact we've made together through our campaigns and volunteers.",
};

const Impact = async () => {
  const campaigns = await connect(collections.CAMPAIGNS)
    .find({ status: "completed" })
    .toArray();

  const users = await connect(collections.USERS).find().toArray();

  // Aggregate total goal amount for completed campaigns
  const totalFunds = campaigns.reduce((sum, c) => sum + c.goalAmount, 0);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center my-6">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Our Impact
        </h2>
        <p className="text-accent-content md:font-bold my-3">
          Together, we’ve empowered communities, improved lives, and created
          sustainable change.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-indigo-600">{users.length}</h2>
          <p className="text-gray-500 mt-2">Volunteers & Donors</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-green-600">
            {campaigns.length}
          </h2>
          <p className="text-gray-500 mt-2">Completed Campaigns</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-600">
            ₹{totalFunds.toLocaleString()}
          </h2>
          <p className="text-gray-500 mt-2">Funds Raised</p>
        </div>
      </div>

      {/* Campaign Cards */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Recent Completed Campaigns
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.title}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {campaign.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{campaign.category}</span>
                <span>{new Date(campaign.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
