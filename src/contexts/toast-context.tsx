import { createContext, useCallback, useState, type ReactNode } from "react";
import Toast from "../components/Toast";

interface ToastContextType {
  showToast: (msg: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });

  const showToast = useCallback((message: string) => {
    setToast({ show: true, message: message });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} show={toast.show} />
    </ToastContext.Provider>
  );
};
