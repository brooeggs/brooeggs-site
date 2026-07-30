"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

type ToastType = "success" | "error";

type ToastItem = {
  id: number;
  type: ToastType;
  message: string;
};

type ToastContextType = {
  show: (type: ToastType, message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

let toastIdCounter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = useCallback((type: ToastType, message: string) => {
    const id = ++toastIdCounter;
    setToasts((prev) => [...prev, { id, type, message }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-2.5 max-w-[380px] w-full pointer-events-none">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }: { toast: ToastItem; onRemove: (id: number) => void }) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onRemove(toast.id), 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => onRemove(toast.id), 300);
  };

  const isSuccess = toast.type === "success";

  return (
    <div
      className={`pointer-events-auto flex items-start gap-2.5 px-4 py-3 rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,.12)] border transition-all duration-300 ${
        visible && !exiting ? "translate-x-0 opacity-100" : "translate-x-[calc(100%+40px)] opacity-0"
      } ${isSuccess ? "bg-white border-[rgba(46,125,50,.25)]" : "bg-white border-[rgba(211,47,47,.25)]"}`}
    >
      {isSuccess ? (
        <CheckCircle size={18} className="text-[#2e7d32] shrink-0 mt-[2px]" />
      ) : (
        <XCircle size={18} className="text-[#d32f2f] shrink-0 mt-[2px]" />
      )}
      <p className={`text-[0.85rem] leading-[1.45] m-0 ${isSuccess ? "text-[#2e7d32]" : "text-[#d32f2f]"}`}>
        {toast.message}
      </p>
      <button onClick={handleClose} className="shrink-0 p-0.5 ml-auto cursor-pointer border-none bg-transparent opacity-40 hover:opacity-100 transition-opacity">
        <X size={14} />
      </button>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
