// src/components/ui/SectionTitle.jsx

/**
 * Small uppercase-icon + label header used above list sections
 * (e.g. "Current Location", "Recent Searches", "Today's Forecast").
 */
export default function SectionTitle({ icon: Icon, children, className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Icon && <Icon className="h-4 w-4 text-accent-500" strokeWidth={2.25} />}
      <h3 className="text-sm font-semibold text-slate-200 tracking-wide">
        {children}
      </h3>
    </div>
  );
}
