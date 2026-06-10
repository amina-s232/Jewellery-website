import React from "react";

const ITEMS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  label: "NEW ARRIVALS",
}));

export default function NewArrivalsTicker() {
  return (
    <section
      aria-label="New arrivals ticker"
      className="border-t border-b"
      style={{
        background: "#3b1a11",
        borderColor: "var(--border-gold)",
      }}
    >
      <div className="relative overflow-hidden py-2 sm:py-2.5">
        <div className="ticker-track">
          {ITEMS.map((item) => (
            <span
              key={item.id}
              className="ticker-item"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

