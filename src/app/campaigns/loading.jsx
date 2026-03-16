import React from "react";

const Loading = () => {
  return (
    <div className="px-4 md:px-10 py-8">
      {/* Title Skeleton */}
      <div className="text-center mb-8 space-y-3">
        <div className="skeleton h-8 w-48 mx-auto"></div>
        <div className="skeleton h-4 w-72 mx-auto"></div>
      </div>

      {/* Campaign Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill()
          .map((_, i) => (
            <div key={i} className="card bg-base-100 shadow-xl">
              {/* Image Skeleton */}
              <div className="skeleton h-48 w-full"></div>

              <div className="card-body space-y-3">
                {/* Title */}
                <div className="skeleton h-5 w-3/4"></div>

                {/* Description */}
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>

                {/* Meta */}
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-16"></div>
                  <div className="skeleton h-4 w-16"></div>
                </div>

                {/* Button */}
                <div className="skeleton h-8 w-full"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Loading;
