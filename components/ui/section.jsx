export function Section({ children, className = "", ...props }) {
  return (
    <section className={`py-16 md:py-24 ${className}`} {...props}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
}) {
  return (
    <div className={`mx-auto max-w-4xl text-center ${className}`}>
      <h2 className="text-4xl md:text-6xl font-normal text-white mb-6 animate-slide-up font-serif">
        {title}{" "}
        {subtitle?.trim() && (
          <p className="text-yellow-400 font-normal  animate-fade-in font-serif">
            {subtitle}
          </p>
        )}
      </h2>
      {description && (
        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in">
          {description}
        </p>
      )}
    </div>
  );
}
