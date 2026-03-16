import React from "react";
import Link from "next/link";
import Image from "next/image";

const CampaignCard = ({ campaign }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
          <Link
            href={`/campaigns/${campaign?._id}`}
            className="btn btn-primary btn-sm w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
