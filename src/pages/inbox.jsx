import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageCard from "../components/MessageCard";
import MessageDetails from "../components/MessageDetails";
import Dock from "../components/Dock";
import messages from "/data/inbox.json"

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
    <div className="p-4 pt-8">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">Inbox</h1>

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
