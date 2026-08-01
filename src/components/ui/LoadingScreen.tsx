"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("no-scroll");
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("no-scroll");
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div id="loader" className={hidden ? "hidden" : ""} role="status" aria-label="Loading Broog's">
      <div className="loader-inner">
        <div className="loader-egg-anim" />
        <div className="loader-brand">Brooeggs</div>
      </div>
    </div>
  );
}
