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
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-content">
        <div className="loader-egg">
          <div className="egg-shell" />
          <div className="egg-yolk" />
        </div>
        <p className="loader-text">Broog&apos;s</p>
      </div>
    </div>
  );
}
