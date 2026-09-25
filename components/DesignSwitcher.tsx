"use client";

import { useState, useSyncExternalStore } from "react";
import { defaultDesign, designStorageKey, designs } from "@/lib/designs";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-design"],
  });
  return () => observer.disconnect();
}

function readDesign() {
  return document.documentElement.dataset.design ?? defaultDesign;
}

function applyDesign(id: string) {
  document.documentElement.dataset.design = id;
  try {
    localStorage.setItem(designStorageKey, id);
  } catch {}
}

export function DesignSwitcher() {
  const current = useSyncExternalStore(subscribe, readDesign, () => defaultDesign);
  const [open, setOpen] = useState(false);
  const active = designs.find((design) => design.id === current) ?? designs[0];

  return (
    <div className="design-switcher">
      {open && (
        <div id="design-panel" className="design-switcher-panel">
          <p className="design-switcher-heading">Try a design</p>
          <ul>
            {designs.map((design) => (
              <li key={design.id}>
                <button
                  type="button"
                  onClick={() => applyDesign(design.id)}
                  aria-pressed={design.id === current}
                >
                  <span className="design-switcher-name">{design.name}</span>
                  <span className="design-switcher-desc">{design.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        className="design-switcher-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="design-panel"
      >
        Design: {active.name}
      </button>
    </div>
  );
}
