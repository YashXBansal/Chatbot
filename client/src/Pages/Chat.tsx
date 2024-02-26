import React, { useState } from 'react';

interface ChatMessage {
  id: number;
  role: string;
  parts: string;
}

const Chat: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

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

  const clear = ()=>{
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
      const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify({
          history: chatHistory,
          message: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await fetch('http://localhost:3000/api/chat', options);
      const data = await response.text();
      
      setChatHistory(oldChatHistory => [
        ...oldChatHistory,
        { role: 'user', parts: value },
        {  role: 'model', parts: data }
      ]);
      
      setValue("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">What do you want to chat about?
          <button onClick={getRandomSurprise} disabled={!chatHistory} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none ml-4">
            Surprise me
          </button>
        </h2>
        <div className="mb-4 flex">
          <input
            value={value}
            placeholder="Ask a question..."
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 flex-1 mr-2"
          />
          <button onClick={getResponse} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            Ask me
          </button>
          <button onClick={clear} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none ml-2">
            Clear
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </section>
      <div id="chat-history" className="w-full max-w-xl">
        {chatHistory.map((message, index) => (
          <div key={index} className={`bg-${message.role === 'user' ? 'gray' : 'green'}-100 rounded-lg p-2 mb-2`}>
            <p className={`text-${message.role === 'user' ? 'gray' : 'green'}-800`}>{message.parts}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
