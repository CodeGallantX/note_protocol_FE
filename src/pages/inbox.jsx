import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import MessageDetails from "../components/MessageDetails";
import Dock from "../components/Dock";

const messages = [
  {
    id: 1,
    subject: "Meeting Tomorrow",
    sender: "Alice",
    timestamp: "2025-01-24 10:30 AM",
    snippet: "Hi, just a reminder about the meeting tomorrow at 10 AM.",
    body: "Hey, just wanted to remind you about our meeting tomorrow at 10 AM. Make sure to prepare the presentation.",
  },
  {
    id: 2,
    subject: "New Project Updates",
    sender: "Bob",
    timestamp: "2025-01-23 05:00 PM",
    snippet: "Here are the updates for the new project. Please review.",
    body: "The new project is progressing well. Please review the attached documents and let me know your thoughts.",
  },
  {
    id: 3,
    subject: "Invoice for Services",
    sender: "Eve",
    timestamp: "2025-01-22 09:15 AM",
    snippet: "Attached is the invoice for your recent services.",
    body: "Please find the attached invoice for the services rendered. Let me know if you have any questions.",
  },
];

const InboxPage = () => {
  const [messagesList, setMessagesList] = useState(messages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const navigate = useNavigate();

  const handleMessageClick = (id) => {
    const message = messagesList.find((msg) => msg.id === id);
    setSelectedMessage(message);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messagesList.filter((message) => message.id !== id);
    setMessagesList(updatedMessages);
    setSelectedMessage(null);
    navigate("/inbox");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Inbox</h1>

      {selectedMessage ? (
        <MessageDetails
          message={selectedMessage}
          onClose={handleCloseMessage}
          onDelete={handleDeleteMessage}
        />
      ) : (
        <div>
          {messagesList
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)) 
            .map((message) => (
              <MessageCard key={message.id} message={message} onClick={handleMessageClick} />
            ))}
        </div>
      )}

      <Dock />
    </div>
  );
};

export default InboxPage;
