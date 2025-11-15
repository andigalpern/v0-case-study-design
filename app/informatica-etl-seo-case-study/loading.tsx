export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading case study...</p>
      </div>
    </div>
  )
}
