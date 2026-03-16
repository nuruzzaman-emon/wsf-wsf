"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ManageAllMember = ({ members }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Member</th>
            <th>Role</th>
            <th>Joined At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr key={member._id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src={member.image}
                        alt={member?.name || "loading"}
                        width={200}
                        height={400}
                      ></Image>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{member?.name}</div>
                    <div className="text-sm opacity-50">{member?.location}</div>
                  </div>
                </div>
              </td>
              <td>{member?.role}</td>
              <td>
                {member.createdAt
                  ? new Date(member?.createdAt).toLocaleDateString()
                  : "-"}
              </td>
              <th className="space-x-2">
                <Link
                  href={"/myProfile"}
                  className="btn btn-xs md:btn-md btn-primary "
                >
                  Profile
                </Link>
                <button className="btn btn-xs md:btn-md btn-primary ">
                  Make User
                </button>
                <button className="btn btn-xs md:btn-md btn-primary ">
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllMember;
