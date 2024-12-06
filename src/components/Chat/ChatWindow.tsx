import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useChatStore } from '../../lib/store/chat';
import { useAuthStore } from '../../lib/store/auth';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const { messages, activeChat, addMessage } = useChatStore();
  const { user } = useAuthStore();

  const handleSend = () => {
    if (!message.trim() || !user || !activeChat) return;

    const newMessage = {
      id: Date.now().toString(),
      senderId: user.id,
      receiverId: activeChat,
      content: message,
      timestamp: new Date(),
    };

    addMessage(newMessage);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h3 className="font-semibold">Chat</h3>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderId === user?.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.senderId === user?.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
            >
              <p>{msg.content}</p>
              <span className="text-xs opacity-70">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;