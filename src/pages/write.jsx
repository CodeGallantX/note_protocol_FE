import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import MessageInput from "../components/MessageInput";
import Dock from "../components/Dock";

const ComposeNote = () => {
  const [message, setMessage] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSendMessage = async (newMessage) => {
    try {
      // Send message data to the backend API
      const response = await axios.post(
        "https://silent-note-protocol-be.onrender.com/api/write/",
        { message: newMessage },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`, // Include token from localStorage
          },
        }
      );

      setMessage(response.data); // Assuming the API returns the message object
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000); // Hide confirmation after 3 seconds
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleShowOutput = () => {
    setShowOutput(true);
  };

  const handleCloseModal = () => {
    setShowOutput(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="mb-6 text-xl font-bold text-gray-700">Write a Note</h1>
      <MessageInput onSend={handleSendMessage} />

      {showConfirmation && (
        <motion.div
          className="absolute top-2 left-1/2 -translate-x-1/2 right-0 max-w-xs shadow-md text-black p-4 pt-2 border border-black/50 rounded-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Note Passed Successfully!
        </motion.div>
      )}

      {message && !showOutput && (
        <div className="mt-4">
          <button
            onClick={handleShowOutput}
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
          >
            Show Code Output
          </button>
        </div>
      )}

      <AnimatePresence>
        {showOutput && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-lg font-bold mb-4 text-gray-700">Code Output</h2>
              <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md text-sm text-gray-800">
                {JSON.stringify(message, null, 2)}
              </pre>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Dock />
    </div>
  );
};

export default ComposeNote;
