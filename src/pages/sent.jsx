import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import MessageDetails from "../components/MessageDetails";
import Dock from "../components/Dock";

const sentMessages = [
  {
    id: 1,
    subject: "Project Updates",
    recipient: "Charlie",
    timestamp: "2025-01-24 10:00 AM",
    snippet: "Here are the updates for the project.",
    body: "The project is progressing well. Please find the attached document with the updates.",
  },
  {
    id: 2,
    subject: "Meeting Tomorrow",
    recipient: "Dave",
    timestamp: "2025-01-23 05:00 PM",
    snippet: "Don't forget about tomorrow's meeting.",
    body: "Hey, just a reminder about our meeting tomorrow at 10 AM. Please be on time.",
  },
  {
    id: 3,
    subject: "Invoice Sent",
    recipient: "Eve",
    timestamp: "2025-01-22 09:00 AM",
    snippet: "Invoice for services rendered.",
    body: "Please find the invoice attached for the services we provided. Let me know if you have any questions.",
  },
];

const SentMessagesPage = () => {
  const [sentMessagesList, setSentMessagesList] = useState(sentMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const navigate = useNavigate();

  const handleMessageClick = (id) => {
    const message = sentMessagesList.find((msg) => msg.id === id);
    setSelectedMessage(message);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null); 
  };

  return (
    <div className="p-4 pt-8">
      <h1 className="text-3xl font-bold text-zinc-700 mb-6">Sent Messages</h1>

      {selectedMessage ? (
        <MessageDetails
          message={selectedMessage}
          onClose={handleCloseMessage}
        />
      ) : (
        <div>
          {sentMessagesList
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map((message) => (
              <MessageCard
                key={message.id}
                message={message}
                onClick={handleMessageClick}
              />
            ))}
        </div>
      )}
      <Dock />
    </div>
  );
};

export default SentMessagesPage;
