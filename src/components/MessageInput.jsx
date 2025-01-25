import { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (sender && receiver && subject && body) {
      const message = {
        sender,
        receiver,
        subject,
        body,
        timestamp: new Date().toISOString(),
      };
      onSend(message);
      setSender("");
      setReceiver("");
      setSubject("");
      setBody("");
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-6 md:border md:rounded-lg md:shadow-md bg-white w-full max-w-lg">
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:border-none outline-none focus:ring-2 focus:ring-zinc-800"
        placeholder="Sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:border-none outline-none focus:ring-2 focus:ring-zinc-800"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        type="text"
        className="w-full px-3 py-2 border rounded-md focus:border-none outline-none focus:ring-2 focus:ring-zinc-800"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="w-full px-3 py-2 border rounded-md outline-none focus:border-none focus:ring-2 focus:ring-zinc-800"
        placeholder="Body"
        rows="4"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 text-white bg-zinc-800 rounded-md hover:bg-zinc-900"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
