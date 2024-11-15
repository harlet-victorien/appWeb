import React, { useState } from 'react';
import axios from 'axios';

interface CreateAuthorModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: () => void; // Callback to refresh the author list
}

const CreateAuthorModal: React.FC<CreateAuthorModalProps> = ({ open, onClose, onCreate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [biography, setBiography] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/authors', {
        firstName,
        lastName,
        photoUrl,
        biography,
        numberBooks: 0,
      });
      onCreate();
      onClose();
    } catch (error) {
      console.error('Failed to create author:', error);
      alert('Failed to create author');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-black">
        <h2 className="text-2xl font-bold mb-4">Create New Author</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-sm font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Photo URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="biography" className="block text-sm font-medium mb-2">
              Biography
            </label>
            <textarea
              id="biography"
              value={biography}
              onChange={(e) => setBiography(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Biography"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthorModal;