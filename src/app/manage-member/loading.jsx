export default function Loading() {
  return (
    <div className="p-6">
      <div className="text-center my-6">
        <div className="h-8 w-60 bg-gray-200 rounded mx-auto animate-pulse"></div>
        <div className="h-4 w-80 bg-gray-200 rounded mx-auto mt-3 animate-pulse"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Member</th>
              <th>Role</th>
              <th>Joined At</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)].map((_, i) => (
              <tr key={i}>
                <td>
                  <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded bg-gray-200 animate-pulse"></div>
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </td>

                <td>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </td>

                <td>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
