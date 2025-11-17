export default function Loading() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#012137] via-[#018AE6] via-[#038190] to-[#F9F2EA]">
      <header className="sticky top-0 z-50 bg-[#012137] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 text-[#ff6b6b] animate-pulse">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8 9 9 10L12 14L15 10C16 9 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2M12 4.5C13.4 4.5 14 5.1 14 6.5C14 7.4 13.5 8 13 8.5L12 10L11 8.5C10.5 8 10 7.4 10 6.5C10 5.1 10.6 4.5 12 4.5M7 11C5 11 3 13 3 15.5C3 17 3.5 18 4.5 19L7 22L9.5 19C10.5 18 11 17 11 15.5C11 13 9 11 7 11M17 11C15 11 13 13 13 15.5C13 17 13.5 18 14.5 19L17 22L19.5 19C20.5 18 21 17 21 15.5C21 13 19 11 17 11Z" />
            </svg>
          </div>
          <span className="text-white text-2xl font-bold">buddies</span>
        </div>
      </header>

      <main className="px-6 py-6 pb-32 space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="h-8 w-24 bg-white/20 rounded animate-pulse"></div>
          <div className="w-full bg-white/20 rounded-full h-16 animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-24 bg-white/20 rounded animate-pulse"></div>
          <div className="w-full bg-white/20 rounded-full h-16 animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-48 bg-white/20 rounded animate-pulse"></div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-square bg-white/20 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-8 w-32 bg-white/20 rounded animate-pulse"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/20 rounded-2xl p-4 h-24 animate-pulse"></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
