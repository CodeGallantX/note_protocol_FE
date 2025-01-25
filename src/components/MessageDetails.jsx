import { useState } from "react";
import { HiX } from "react-icons/hi";

const MessageDetails = ({ message, onClose, onDelete }) => {
  const [showDetails, setShowDetails] = useState(true);

  const handleClose = () => {
    setShowDetails(false);
    setTimeout(() => onClose(), 300);
  };

  const handleDelete = () => {
    setShowDetails(false);
    setTimeout(() => onDelete(message.id), 300);
  };

  return (
    <div
      className={`transition-all duration-300 transform ${showDetails ? "opacity-100" : "opacity-0 translate-x-full"}`}
    >
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
        >
          <HiX size={24} />
        </button>

        {/* Message Details */}
        <h2 className="text-2xl font-bold">{message.subject}</h2>
        <div className="text-sm text-gray-600">{message.sender}</div>
        <div className="text-sm text-gray-500">{message.timestamp}</div>
        <div className="mt-4">{message.body}</div>

        <button
          onClick={handleDelete}
          className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageDetails;
