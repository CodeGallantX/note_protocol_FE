import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import MessageCard from "../components/MessageCard";
import MessageDetails from "../components/MessageDetails";
import Dock from "../components/Dock";

const InboxPage = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const navigate = useNavigate();

  // Fetch messages from the backend on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Make GET request to your backend API
        const response = await axios.get("https://silent-note-protocol-be.onrender.com/api/inbox/");
        
        if (response.status === 200) {
          setMessagesList(response.data);  // Update the messages list with the fetched data
        } else {
          console.error("Failed to fetch messages:", response.data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  const handleMessageClick = (id) => {
    const message = messagesList.find((msg) => msg.id === id);
    setSelectedMessage(message);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };

  const handleDeleteMessage = async (id) => {
    try {
      // Make DELETE request to the backend API to delete the message
      const response = await axios.delete(
        `https://silent-note-protocol-be.onrender.com/api/inbox/${id}/`
      );
      
      if (response.status === 204) {
        const updatedMessages = messagesList.filter((message) => message.id !== id);
        setMessagesList(updatedMessages);
        setSelectedMessage(null);
        navigate("/inbox");
      } else {
        console.error("Failed to delete message:", response.data);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
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
