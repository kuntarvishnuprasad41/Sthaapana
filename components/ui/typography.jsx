export function Heading({ level = 1, children, className = "", gradient = false, ...props }) {
  const Tag = `h${level}`
  const baseClasses = "font-bold leading-tight font-serif"
  const sizeClasses = {
    1: "text-4xl md:text-6xl lg:text-7xl",
    2: "text-3xl md:text-5xl lg:text-6xl",
    3: "text-2xl md:text-4xl lg:text-5xl",
    4: "text-xl md:text-3xl lg:text-4xl",
    5: "text-lg md:text-2xl lg:text-3xl",
    6: "text-base md:text-xl lg:text-2xl",
  }

  const gradientClass = gradient ? "gold-gradient" : "text-white"

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${gradientClass} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function Text({ size = "base", children, className = "", muted = false, ...props }) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
  }

  const colorClass = muted ? "text-gray-400" : "text-white"

  return (
    <p className={`${sizeClasses[size]} ${colorClass} leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  )
}
