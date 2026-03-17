"use server";
import bcrypt from "bcryptjs";
import { collections, connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
const usersCollection = connect(collections.USERS);

export const postUser = async (payload) => {
  //check user
  const isAxist = await usersCollection.findOne({
    email: payload.email,
  });
  if (isAxist) {
    return {
      success: false,
      message: "User already axisted",
    };
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  //create new user
  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    role: "user",
    password: hashedPassword,
  };
  //post new user
  const result = await usersCollection.insertOne(newUser);
  if (result.insertedId) {
    return {
      success: true,
      message: `user Created With ${result.insertedId.toString()}`,
    };
  } else {
    return {
      success: false,
      message: "something went wrong.please try again",
    };
  }
};

export const updateUser = async (payload) => {
  const { id, ...updateData } = payload;
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: { ...updateData, updatedAt: new Date() },
  };
  const result = await usersCollection.updateOne(query, updateDoc);
  return { success: true, message: " Updated Successfully" };
};

export const deleteUser = async (id) => {
  const query = { _id: new ObjectId(id) };
  const result = await usersCollection.deleteOne(query);
  return { success: true, message: "Deleted Successfully" };
};
