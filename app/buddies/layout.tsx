import './buddies.css'

export default function BuddiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="buddies-phone-frame">
        {children}
      </div>
    </div>
  )
}
