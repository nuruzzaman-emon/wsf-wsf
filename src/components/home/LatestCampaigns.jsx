import React from "react";
import CampaignCard from "../../app/campaigns/CampaignCard";

const LatestCampaigns = async ({ campaigns }) => {
  return (
    <div className="rounded-xl shadow-2xl p-6">
      <div className="text-center my-4">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Latest Campaigns
        </h2>
        <p className="text-accent-content md:font-bold my-2">
          Explore our latest initiatives and join us in bringing hope to those
          who need it most
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign._id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default LatestCampaigns;
