import { connect, collections } from "@/lib/dbConnect";

import Hero from "@/components/home/Hero";
import LatestCampaigns from "@/components/home/LatestCampaigns";
import React from "react";
import FAQSection from "@/components/home/FAQ";
import HowItWorks from "@/components/home/HowItWorks";

const Page = async () => {
  const campaignCollection = await connect(collections.CAMPAIGNS);

  const res = await campaignCollection
    .find()
    .limit(8)
    .sort({ createdAt: 1 })
    .toArray();

  return (
    <div className="space-y-16">
      <Hero />
      <LatestCampaigns campaigns={res} />
      <HowItWorks />
      <FAQSection />
    </div>
  );
};

export default Page;
