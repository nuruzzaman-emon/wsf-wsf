export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="text-center my-6">
        <div className="h-8 w-60 bg-gray-200 rounded mx-auto animate-pulse"></div>
        <div className="h-4 w-80 bg-gray-200 rounded mx-auto mt-3 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="card bg-base-100 shadow-lg border border-base-300 rounded-lg animate-pulse h-40"
          ></div>
        ))}
      </div>

      <div className="my-6 flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
