import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import Axios


interface ChatMessage {
  id: number;
  role: string;
  parts: string;
}

const Chat: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const surpiseOptions: string[] = [
    'Who won the latest Nobel Peace Prize?',
    'Where does pizza come from?',
    'How do you make a BLT sandwich?'
  ];

  const getRandomSurprise = (): void => {
    const randomValue: string = surpiseOptions[Math.floor(Math.random() * surpiseOptions.length)];
    setValue(randomValue);
    setError(null);
  };

  const clear = () => {
    setValue("");
    setError('');
    setChatHistory([]);
  }

  const getResponse = async (): Promise<void> => {
    if (!value) {
      setError("Error! Please enter a question");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
        history: chatHistory,
        message: value
      });

      setChatHistory(prevChatHistory => [
        ...prevChatHistory,
        { id: prevChatHistory.length, role: 'user', parts: value },
        { id: prevChatHistory.length + 1, role: 'model', parts: response.data }
      ]);
      

      setValue("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  // Scroll to the bottom of the chat history when new messages are added
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12 md:p-12 lg:p-16 m-4 md:m-8 sm:m-15 bg-gray-900 text-white">
      <section className="bg-gray-800 p-4 md:p-12 lg:p-16 rounded-lg shadow-md mb-8 max-w-lg w-full">
        <h2 className="text-2xl p-4 text-center font-bold mb-4">Chat with Gemini</h2>
        <div className="mb-4 flex flex-col items-center">
          <input
            value={value}
            placeholder="Ask a question..."
            onChange={(e) => setValue(e.target.value)}
            className="border bg-gray-700 border-gray-800 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 mb-2 w-full md:w-auto"
          />
          <div className="flex flex-wrap justify-center">
            <button onClick={getResponse} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mr-2 mb-2">Ask</button>
            <button onClick={clear} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none mr-2 mb-2">Clear</button>
            <button onClick={getRandomSurprise} disabled={!chatHistory} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mb-2">Surprise me</button>
          </div>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </section>

      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-md text-white overflow-y-auto max-h-80vh mb-8 px-4 py-2" ref={chatHistoryRef}>
        <h2 className="text-2xl font-bold text-center mb-4">Chat History</h2>
        {chatHistory.map((message, index) => (
          <div key={index} className={`bg-${message.role === 'user' ? 'gray' : 'gray'}-800 rounded-lg p-2 mb-2 ${message.role === 'model' ? 'text-blue-500' : ''}`}>
            <p className="text-lg">{message.parts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
