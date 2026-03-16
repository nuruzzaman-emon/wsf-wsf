import { collections, connect } from "@/lib/dbConnect";
import React from "react";
import CampaignCard2 from "./CampaignCard2";

const manageCampaigns = async () => {
  const campaignsData = await connect(collections.CAMPAIGNS).find().toArray();
  const plainCampaigns = campaignsData.map((c) => ({
    ...c,
    _id: c._id?.toString(),
    createdAt: c.createdAt?.toString(),
    deadline: c.deadline?.toString(),
  }));
  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Manage Your Campaigns
        </h2>
        <p className="text-accent-content md:font-bold my-3">
          Manage your initiatives and keep your supporters informed about
          progress.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {" "}
        {plainCampaigns.map((campaign) => (
          <CampaignCard2
            key={campaign?._id}
            campaign={campaign}
          ></CampaignCard2>
        ))}
      </div>
    </div>
  );
};

export default manageCampaigns;
