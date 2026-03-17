"use client";
import { deleteUser, updateUser } from "@/components/actions/server/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const ManageAllMember = ({ members }) => {
  const router = useRouter();
  const handleChangeRole = async (id, role) => {
    const updateDoc = { id, role: "" };
    try {
      if (role === "user") {
        updateDoc.role = "organizer";
      } else if (role === "organizer") {
        updateDoc.role = "user";
      }
      const res = await updateUser(updateDoc);
      if (res.success && res.message) {
        Swal.fire({ icon: "success", title: res.message });
        router.refresh();
      }
    } catch (error) {
      Swal.fire({ icon: "error", title: error.message });
    }
  };
  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    if (res.success && res.message) {
      Swal.fire({ icon: "success", title: res.message });
      router.refresh();
    } else {
      Swal.fire({ icon: "error", title: "Deletation Failed" });
    }
  };
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
            <tr key={member._id} className="hover:bg-amber-50">
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
                  href={`/manage-member/${member?._id}`}
                  className="btn btn-xs md:btn-md btn-primary "
                >
                  Profile
                </Link>
                {member?.role === "user" ? (
                  <button
                    onClick={() => handleChangeRole(member?._id, member?.role)}
                    className="btn btn-xs md:btn-md btn-primary"
                  >
                    Make Organizer
                  </button>
                ) : member?.role === "organizer" ? (
                  <button
                    onClick={() => handleChangeRole(member?._id, member?.role)}
                    className="btn btn-xs md:btn-md btn-primary"
                  >
                    Make User
                  </button>
                ) : (
                  <button
                    className="btn btn-xs md:btn-md btn-primary text-accent"
                    disabled
                  >
                    Admin
                  </button>
                )}
                <button
                  onClick={() => handleDelete(member?._id)}
                  className="btn btn-xs md:btn-md btn-primary "
                >
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
