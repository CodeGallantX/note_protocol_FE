import MessageInput from "../components/MessageInput";
import Dock from "../components/Dock"

const ComposeMessagePage = () => {
  const handleSendMessage = (message) => {
    console.log("Message sent:", message);
    // Example: Replace this with API integration or state update logic
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="mb-6 text-xl font-bold text-gray-700">Write a Note</h1>
      <MessageInput onSend={handleSendMessage} />
      <Dock />
    </div>
  );
};

export default ComposeMessagePage;
