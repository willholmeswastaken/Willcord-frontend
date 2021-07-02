import React from 'react';
import Chat from '../chat';
import MessageBar from '../messagebar';

const ChatWindow = () => (
  <div className="bg-gray-750 flex-1 flex flex-col justify-between">
    <Chat />
    <MessageBar />
  </div>
);

export default ChatWindow;
