"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4">Page Not Found</h2>

        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/" className="btn btn-primary px-6">
            Go Home
          </Link>

          <button
            onClick={() => history.back()}
            className="btn btn-outline px-6"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12">
          <div className="text-6xl animate-bounce">🚀</div>
        </div>
      </div>
    </div>
  );
}
