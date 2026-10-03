"use client";

import { useState, type ReactNode } from "react";

/** A tick-as-you-go list. State is kept in memory only. */
export function Checklist({
  items,
}: {
  items: { label: ReactNode; hint?: ReactNode }[];
}) {
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  const count = done.filter(Boolean).length;

  return (
    <div className="checklist">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() =>
                  setDone((d) => d.map((v, j) => (j === i ? !v : v)))
                }
              />
              <span>
                <span className="checklist-label">{item.label}</span>
                {item.hint && <span className="checklist-hint">{item.hint}</span>}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p className="checklist-count" aria-live="polite">
        {count === items.length
          ? "All set. On to step 1."
          : `${count} of ${items.length} ready`}
      </p>
    </div>
  );
}
