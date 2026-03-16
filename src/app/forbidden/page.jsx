"use client";

import Link from "next/link";
import { FaBan } from "react-icons/fa";

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 sm:p-5 rounded-full">
            <FaBan className="text-red-500 text-3xl sm:text-4xl" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
          403
        </h1>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3">
          Access Forbidden
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mb-8">
          You don’t have permission to access this page. Please contact the
          administrator if you think this is a mistake.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <Link
            href="/login"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
