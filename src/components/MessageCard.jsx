const MessageCard = ({ message, onClick }) => {
  return (
    <div
      className="border p-4 mb-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(message.id)}
    >
      <div className="font-bold text-lg">{message.subject}</div>
      <div className="text-sm text-gray-600">{message.sender}</div>
      <div className="text-sm text-gray-500">{message.timestamp}</div>
      <p className="text-sm text-gray-700 mt-2">{message.snippet}</p>
    </div>
  );
};

export default MessageCard;
