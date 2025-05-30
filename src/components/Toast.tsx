type ToastProps = {
  message: string;
  show: boolean;
};

const Toast = ({ message, show }: ToastProps) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-4 end-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 animate-bounce">
      {message}
    </div>
  );
};

export default Toast;
