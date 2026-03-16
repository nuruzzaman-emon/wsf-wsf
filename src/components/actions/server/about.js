"use server";

const { connect, collections } = require("@/lib/dbConnect");

export const getAboutInfo = async () => {
  const result = await connect(collections.ABOUT).find().toArray();
  return result;
};
