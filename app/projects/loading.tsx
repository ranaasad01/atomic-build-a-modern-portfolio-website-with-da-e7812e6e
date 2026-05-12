export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-6 w-24 rounded-full bg-white/10 mx-auto mb-6 animate-pulse" />
          <div className="h-14 w-80 rounded-xl bg-white/10 mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 rounded-lg bg-white/10 mx-auto mb-8 animate-pulse" />
          <div className="flex justify-center gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="h-9 w-12 rounded-lg bg-white/10 mx-auto mb-2 animate-pulse" />
                <div className="h-4 w-20 rounded bg-white/10 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter skeleton */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-12 rounded-xl bg-slate-200 dark:bg-slate-800 mb-6 animate-pulse" />
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-7 w-16 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
          ))}
        </div>

        {/* Cards skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-video bg-slate-200 dark:bg-slate-700" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="flex gap-2 pt-2">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-6 w-16 rounded-lg bg-slate-200 dark:bg-slate-700" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
