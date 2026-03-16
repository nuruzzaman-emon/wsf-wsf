import { collections, connect } from "@/lib/dbConnect";
import React from "react";
import ManageAllMember from "./ManageAllMember";

const ManageMember = async () => {
  const usersCollections = await connect(collections.USERS);
  const users = await usersCollections.find().toArray();
  const plainUsers = users.map((u) => ({
    ...u,
    _id: u._id?.toString(),
    createdAt: u.createdAt?.toString(),
    deadline: u.deadline?.toString(),
  }));
  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Manage Members
        </h2>
        <p className="text-accent-content md:font-bold my-3">
          View, edit, and manage all registered members.
        </p>
      </div>
      <ManageAllMember members={plainUsers}></ManageAllMember>
    </div>
  );
};

export default ManageMember;
