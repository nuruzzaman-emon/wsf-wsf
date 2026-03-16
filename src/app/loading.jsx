const HomeSkeleton = () => {
  return (
    <div className="space-y-10 p-4">
      {/* Navbar Skeleton */}
      <div className="flex items-center justify-between">
        <div className="skeleton h-12 w-12 rounded-full"></div>

        <div className="hidden md:flex gap-6">
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-16"></div>
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        <div className="flex gap-3">
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-8 w-24"></div>
        </div>
      </div>

      {/* Hero Title */}
      <div className="text-center space-y-3">
        <div className="skeleton h-8 w-72 mx-auto"></div>
        <div className="skeleton h-4 w-96 mx-auto"></div>
      </div>

      {/* Slider Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center border rounded-xl p-6">
        {/* Left Text */}
        <div className="space-y-4">
          <div className="skeleton h-8 w-64"></div>
          <div className="skeleton h-6 w-56"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-4/5"></div>

          <div className="flex gap-4 pt-4">
            <div className="skeleton h-10 w-28"></div>
            <div className="skeleton h-10 w-24"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="skeleton h-64 w-full rounded-lg"></div>
      </div>

      {/* Latest Campaign Section */}
      <div className="space-y-6">
        {/* Section Title */}
        <div className="space-y-2">
          <div className="skeleton h-6 w-48"></div>
          <div className="skeleton h-4 w-72"></div>
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border rounded-xl p-4 space-y-4">
              <div className="skeleton h-40 w-full rounded-lg"></div>

              <div className="space-y-2">
                <div className="skeleton h-5 w-3/4"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
              </div>

              <div className="skeleton h-10 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
