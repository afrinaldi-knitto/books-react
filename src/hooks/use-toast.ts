import { useContext } from "react";
import { ToastContext } from "../contexts/toast-context";

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast harus di dalam ToastProvider");
  return context;
}
