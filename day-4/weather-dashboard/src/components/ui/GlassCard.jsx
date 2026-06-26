// src/components/ui/GlassCard.jsx

/**
 * Reusable glassmorphism card wrapper.
 * `strong` uses a slightly more opaque glass treatment for hero/primary surfaces.
 * `as` lets the wrapper element be swapped (e.g. "section", "aside").
 */
export default function GlassCard({
  children,
  className = "",
  strong = false,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={`${
        strong ? "glass-strong" : "glass"
      } rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
