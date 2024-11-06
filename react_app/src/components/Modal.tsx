import { FC, ReactNode } from "react";

export const Modal: FC<{
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
          {children}
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">
            Close
          </button>
        </div>
      </div>
    );
  };