const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>

        <p className="text-gray-500 mb-12">
          Start a campaign and receive support in just a few simple steps.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-md p-6">
            <div className="text-4xl mb-4">👤</div>
            <h3 className="font-semibold text-lg">Create Account</h3>
            <p className="text-sm text-gray-500 mt-2">
              Sign up quickly using your email or Google account.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="font-semibold text-lg">Start Campaign</h3>
            <p className="text-sm text-gray-500 mt-2">
              Add details about your cause and publish your campaign.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="font-semibold text-lg">Share</h3>
            <p className="text-sm text-gray-500 mt-2">
              Share your campaign with your network to gain support.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-semibold text-lg">Receive Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Collect donations and track the progress of your campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
