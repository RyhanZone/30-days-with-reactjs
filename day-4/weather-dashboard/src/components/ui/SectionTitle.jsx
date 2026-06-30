export default function SectionTitle({ icon: Icon, children, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Icon && (
        <Icon className="h-4 w-4 text-accent-500" strokeWidth={2.25} />
      )}

      <h3 className="tracking-wide text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
        {children}
      </h3>
    </div>
  );
}