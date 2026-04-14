export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-6xl mx-auto mt-20">
          
          <div className="grid grid-cols-3 gap-4">

            {/* LEFT COLUMN */}
            <div className="col-span-1 space-y-3">

              {/* Friend Card Skeleton */}
              <div className="border shadow-sm px-6 py-8 text-center animate-pulse">
                <div className="h-20 w-20 rounded-full bg-gray-200 mx-auto" />

                <div className="h-4 w-32 bg-gray-200 mx-auto mt-4 rounded" />

                <div className="h-3 w-24 bg-gray-200 mx-auto mt-2 rounded" />

                <div className="flex gap-2 justify-center mt-3">
                  <div className="h-5 w-12 bg-gray-200 rounded-full" />
                  <div className="h-5 w-12 bg-gray-200 rounded-full" />
                </div>

                <div className="h-5 w-20 bg-gray-200 mx-auto mt-3 rounded-full" />

                <div className="h-4 w-28 bg-gray-200 mx-auto mt-2 rounded" />
              </div>

              {/* Buttons Skeleton */}
              <div className="space-y-2">
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
                <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-2 space-y-4">

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 bg-gray-200 animate-pulse rounded" />
                <div className="h-24 bg-gray-200 animate-pulse rounded" />
                <div className="h-24 bg-gray-200 animate-pulse rounded" />
              </div>

              {/* Relationship Goal */}
              <div className="h-20 bg-gray-200 animate-pulse rounded flex items-center justify-between px-4">
                <div className="space-y-2">
                  <div className="h-4 w-40 bg-gray-300 rounded" />
                  <div className="h-3 w-32 bg-gray-300 rounded" />
                </div>
                <div className="h-8 w-20 bg-gray-300 rounded" />
              </div>

              {/* Quick Check-in */}
              <div className="h-32 bg-gray-200 animate-pulse rounded p-4 space-y-3">
                <div className="h-4 w-32 bg-gray-300 rounded" />

                <div className="grid grid-cols-3 gap-3 mt-2">
                  <div className="h-16 bg-gray-300 rounded" />
                  <div className="h-16 bg-gray-300 rounded" />
                  <div className="h-16 bg-gray-300 rounded" />
                </div>
              </div>

              {/* Timeline Skeleton (FIXED - NO NESTED PAGE WRAPPER) */}
              <div className="relative ml-4 space-y-10">

                {/* vertical line */}
                <div className="absolute inset-y-0 left-0 w-0.5 bg-gray-200" />

                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative pl-10">

                    {/* icon */}
                    <div className="absolute -left-2.25 top-1 h-9 w-9 rounded-full bg-gray-200 ring-4 ring-white animate-pulse" />

                    {/* content */}
                    <div className="space-y-3">

                      <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />

                      <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />

                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                      </div>

                      <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-4/6 bg-gray-200 rounded animate-pulse" />
                      </div>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {[1, 2, 3, 4, 5].map((b) => (
                          <div
                            key={b}
                            className="h-5 w-16 bg-gray-200 rounded-full animate-pulse"
                          />
                        ))}
                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}