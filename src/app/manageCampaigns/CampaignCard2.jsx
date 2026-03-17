"use client";
import {
  deleteCampaign,
  editCampaign,
} from "@/components/actions/server/campaign";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdIncompleteCircle } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

import Swal from "sweetalert2";

const CampaignCard2 = ({ campaign }) => {
  const router = useRouter();
  //for delete
  const handleDelete = async () => {
    try {
      const res = await deleteCampaign(campaign?._id);
      if (res.acknowledged && res.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Campaign Deleted",
        });
        router.refresh();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to Delete ",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong ",
      });
    }
  };
  const handleCompleted = async () => {
    const updateData = {
      id: campaign?._id,
      status: "completed",
    };
    const res = await editCampaign(updateData);
    if (res.success && res.message) {
      Swal.fire({
        icon: "success",
        title: res.message,
      });
      router.refresh();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
      });
    }
  };

  return (
    <div className="card bg-base-50 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl hover:bg-white transition-shadow duration-300">
      {/* Image / Icon */}

      <Image
        src={campaign?.image || "/logoo.png"} // fallback image
        alt={campaign?.title}
        width={500}
        height={300}
        className="object-cover w-full h-48"
      />

      {/* Card body */}
      <div className="card-body p-4 flex flex-col justify-between">
        {/* Title */}
        <h2 className="card-title text-lg md:text-xl font-bold line-clamp-1">
          {campaign?.title}
        </h2>

        {/* Short description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {campaign?.description}
        </p>

        {/* Meta / Price / Location */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{campaign?.category}</span>
          <span>{campaign?.location}</span>
          <span>Deadline: {campaign?.deadline}</span>
        </div>

        {/* Details Button */}
        <div className="card-actions mt-3">
          <div className="w-full flex justify-between">
            <Link
              href={`/campaigns/${campaign?._id}`}
              className="btn btn-xs md:btn-md btn-primary"
            >
              <TbListDetails />
              Details
            </Link>
            <button
              onClick={handleCompleted}
              className="btn btn-xs md:btn-md btn-primary"
              disabled={campaign?.status === "completed"}
            >
              <MdIncompleteCircle />
              Completed
            </button>
          </div>
          <div className="w-full flex justify-between">
            <button
              onClick={handleDelete}
              className="btn btn-xs md:btn-md btn-primary"
            >
              <RiDeleteBin6Line />
              Delete
            </button>

            <Link
              href={`/edit-page/${campaign?._id}/edit`}
              className="btn btn-xs md:btn-md btn-primary"
            >
              <FaEdit /> Edit Campaign
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard2;
