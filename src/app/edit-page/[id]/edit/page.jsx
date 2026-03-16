import React from "react";
import EditPageForm from "../../EditPageForm";
import { singleCampaign } from "@/components/actions/server/campaign";

const EditPage = async ({ params }) => {
  const { id } = await params;
  const campaignData = await singleCampaign(id);
  const campaign = {
    ...campaignData,
    _id: campaignData?._id.toString(),
    createdAt: campaignData?.createdAt.toString(),
    deadline: campaignData?.deadline.toString(),
  };
  
  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Edit Your Campaigns
        </h2>
        <p className="text-accent-content md:font-bold my-3">
          Make changes to your campaign information and keep it up to date.
        </p>
      </div>
      <EditPageForm campaign={campaign}></EditPageForm>
    </div>
  );
};

export default EditPage;
