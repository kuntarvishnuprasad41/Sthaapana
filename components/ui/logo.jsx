export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo.svg" alt="Riyash Logo" className="h-12 w-auto" />
    </div>
  )
}
