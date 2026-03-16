"use client"; // if using Next 13+ app router

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Impact = () => {
  const [campaigns, setCampaigns] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setUsers([{ name: "User 1" }, { name: "User 2" }]); // replace with fetch from API
      setCampaigns([
        {
          title: "Campaign A",
          description: "Lorem ipsum dolor sit amet",
          category: "Health",
          createdAt: "2026-03-01T00:00:00.000Z",
          image: "/placeholder.png",
          goalAmount: 5000,
        },
        {
          title: "Campaign B",
          description: "Consectetur adipiscing elit",
          category: "Education",
          createdAt: "2026-03-02T00:00:00.000Z",
          image: "/placeholder.png",
          goalAmount: 7000,
        },
      ]);
    }, 1000);
  }, []);

  const totalFunds = campaigns?.reduce((sum, c) => sum + c.goalAmount, 0) || 0;

  if (!campaigns || !users) {
    // Loading skeleton
    return (
      <div className="p-8 space-y-8">
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-20 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Our Impact</h1>
        <p className="text-gray-600">
          Together, we’ve empowered communities and made a real difference.
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold">{users.length}</h2>
          <p>Volunteers & Donors</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold">{campaigns.length}</h2>
          <p>Completed Campaigns</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-2xl font-bold">{totalFunds}</h2>
          <p>Total Funds Raised</p>
        </div>
      </div>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campaigns.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded shadow overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-2 line-clamp-3">{c.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{c.category}</span>
                <span>{new Date(c.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
