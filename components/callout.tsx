import { AlertTriangle, Info, Lightbulb, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "info" | "warning" | "tip";

const config: Record<CalloutType, { icon: LucideIcon; label: string }> = {
  info: { icon: Info, label: "Note" },
  warning: { icon: AlertTriangle, label: "Watch out" },
  tip: { icon: Lightbulb, label: "Why this matters" },
};

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, label } = config[type];
  return (
    <aside className={`callout callout-${type}`}>
      <Icon className="callout-icon" size={18} aria-hidden />
      <div className="callout-body">
        <p className="callout-title">{title ?? label}</p>
        {children}
      </div>
    </aside>
  );
}
