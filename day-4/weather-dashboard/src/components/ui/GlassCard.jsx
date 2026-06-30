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
        strong
          ? "glass-strong dark:glass-strong light:bg-white light:border light:border-slate-200"
          : "glass dark:glass light:bg-white/90 light:border light:border-slate-200"
      } rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] light:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}