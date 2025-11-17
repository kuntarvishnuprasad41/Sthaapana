export function Logo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo.svg" alt="Sthaapana Logo" className="h-12 w-auto" />
    </div>
  );
}

export function LogoB({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo-b.svg" alt="Sthaapana Logo" className="h-12 w-auto" />
    </div>
  );
}
