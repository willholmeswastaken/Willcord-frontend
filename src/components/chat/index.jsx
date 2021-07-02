import React from 'react';

const Chat = () => (
  <div className="chat text-sm text-gray-400 overflow-y-auto">
    <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
      <div className="flex-none"><a href="https://google.com"><img src="/avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full" /></a></div>
      <div className="ml-5">
        <div>
          <a href="https://google.com" className="text-white hover:underline">drehimself</a>
          <span className="text-xs text-gray-600 ml-1">07/17/2019</span>
        </div>
        <div>
          <div>yeah hahaha</div>
          <div>some other comment</div>
          <div>why are you so awesome</div>
        </div>
      </div>
    </div>
  </div>
);

export default Chat;
