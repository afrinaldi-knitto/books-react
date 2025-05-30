type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
  if (!show) return null;
  return (
    <div className="fixed z-50 inset-0 bg-black opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 min-w-[300px] relative">
        <button
          className="absolute top-2 end-3 text-xl text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
