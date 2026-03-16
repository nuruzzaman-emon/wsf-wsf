const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[350px] md:h-[450px] bg-gray-300 rounded-xl"></div>

      <div className="mt-8 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="h-10 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-6 w-full bg-gray-300 rounded"></div>
          <div className="h-6 w-5/6 bg-gray-300 rounded"></div>

          <div className="flex gap-4 mt-4">
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Donation Card Skeleton */}
        <div className="bg-gray-200 p-6 rounded-xl space-y-4">
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>

          <div className="h-4 w-full bg-gray-300 rounded"></div>

          <div className="h-10 w-full bg-gray-300 rounded"></div>

          <div className="h-10 w-full bg-gray-400 rounded"></div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="mt-12 space-y-3">
        <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
        <div className="h-5 w-full bg-gray-300 rounded"></div>
        <div className="h-5 w-5/6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Loading;
