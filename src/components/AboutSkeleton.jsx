// components/AboutSkeleton.jsx
import React from "react";

const AboutSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 animate-pulse">
      {Array.from({ length: 7 }).map((_, idx) => (
        <div
          key={idx}
          className="card bg-base-100 shadow-lg border border-base-300 rounded-lg p-6"
        >
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkeleton;