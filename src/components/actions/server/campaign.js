"use server";
const { connect, collections } = require("@/lib/dbConnect");
const { ObjectId } = require("mongodb");

const campaignCollections = connect(collections.CAMPAIGNS);

export const singleCampaign = async (id) => {
  const query = { _id: new ObjectId(id) };
  const campaign = await campaignCollections.findOne(query);
  return { ...campaign, _id: campaign._id.toString() } || {};
};

export const deleteCampaign = async (id) => {
  const query = { _id: new ObjectId(id) };
  const result = await campaignCollections.deleteOne(query);
  return result;
};

export const editCampaign = async (data) => {
  const { _id, ...rest } = data;
  const query = { _id: new ObjectId(_id) };

  // If updating status to completed, also add completedAt timestamp
  if (rest.status === "completed") {
    rest.completedAt = new Date();
  }

  
  
  // Perform update
  const updateDoc = { $set: rest };
  await campaignCollections.updateOne(query, updateDoc);

  // Return context-sensitive message
  if (rest.status === "completed") {
    return { success: true, message: "Campaign marked as completed" };
  }

  return { success: true, message: "Campaign updated successfully" };
};
