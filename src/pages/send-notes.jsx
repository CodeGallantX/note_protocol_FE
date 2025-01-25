import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // React Icons
import Dock from "../components/Dock";

export default function SendNotes() {
  const [noteMessage, setNoteMessage] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the note (API call)
    alert("Note Sent!");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Send a Note
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Receiver Input */}
          <div>
            <label htmlFor="receiver" className="block text-lg font-medium text-gray-700">
              Receiver&apos;s Username
            </label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              placeholder="Enter username"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Note Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              value={noteMessage}
              onChange={(e) => setNoteMessage(e.target.value)}
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center py-3 px-6 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition transform hover:scale-105"
            >
              <FaPaperPlane className="mr-2" />
              Send Note
            </button>
          </div>
        </form>
      </div>
      <Dock />
    </div>
  );
}
