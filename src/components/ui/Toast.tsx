"use client";

import {
  useState, useEffect, useCallback,
  createContext, useContext,
} from "react";

type ToastType = "success" | "error";
type ToastItem = { id: number; type: ToastType; message: string };
type ToastCtx  = { show: (type: ToastType, message: string) => void };

const ToastContext = createContext<ToastCtx | null>(null);
let counter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((type: ToastType, message: string) => {
    const id = ++counter;
    setToasts(prev => [...prev, { id, type, message }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {/* Container — fixed, top-right on desktop, bottom on mobile via CSS */}
      <div
        className="toast-container"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 380,
          width: "calc(100vw - 32px)",
          pointerEvents: "none",
        }}
        aria-live="polite"
        aria-atomic="false"
      >
        {toasts.map(t => (
          <ToastItem key={t.id} toast={t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({
  toast,
  onRemove,
}: {
  toast: ToastItem;
  onRemove: (id: number) => void;
}) {
  const [visible,  setVisible]  = useState(false);
  const [exiting,  setExiting]  = useState(false);

  useEffect(() => {
    // Trigger enter animation
    const raf = requestAnimationFrame(() => setVisible(true));
    // Auto-dismiss after 4 s
    const timer = setTimeout(() => dismiss(), 4000);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dismiss() {
    setExiting(true);
    setTimeout(() => onRemove(toast.id), 320);
  }

  const ok = toast.type === "success";

  return (
    <div
      role="alert"
      style={{
        pointerEvents: "auto",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 10,
        background: "#fff",
        border: `1.5px solid ${ok ? "rgba(46,125,50,.25)" : "rgba(211,47,47,.25)"}`,
        boxShadow: "0 8px 30px rgba(0,0,0,.12)",
        transition: "all 0.32s cubic-bezier(0.4,0,0.2,1)",
        transform: visible && !exiting ? "translateX(0)" : "translateX(calc(100% + 40px))",
        opacity: visible && !exiting ? 1 : 0,
      }}
    >
      {/* Icon */}
      <span
        style={{
          fontSize: 17,
          flexShrink: 0,
          marginTop: 1,
          color: ok ? "#2e7d32" : "#d32f2f",
        }}
        aria-hidden="true"
      >
        {ok ? "✅" : "❌"}
      </span>

      {/* Message */}
      <p
        style={{
          margin: 0,
          flex: 1,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          color: ok ? "#1b5e20" : "#b71c1c",
          fontWeight: 600,
        }}
      >
        {toast.message}
      </p>

      {/* Close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss notification"
        style={{
          flexShrink: 0,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 2,
          opacity: 0.45,
          fontSize: 14,
          lineHeight: 1,
          color: "#2C1A0A",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.45")}
      >
        ✕
      </button>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
