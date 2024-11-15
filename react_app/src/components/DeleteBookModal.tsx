import React from 'react';

interface DeleteBookModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteBookModal: React.FC<DeleteBookModalProps> = ({ open, onClose, onDelete }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black">
        <h1 className="text-2xl font-bold mb-4">Delete Book</h1>
        <p>Are you sure you want to delete this book?</p>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookModal;