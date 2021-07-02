import React from 'react';

const ChannelParticipants = () => (
  <div className="sidebar-users text-sm bg-gray-800 w-56 flex-none px-3 py-3 overflow-y-auto">
    <h3 className="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Core Team — 1</h3>
    <ul className="mb-6 truncate">
      <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
        <a href="https://google.com" className="flex items-center">
          <span className="flex-none" />
        </a>
        <a href="https://google.com"><img src="/avatar2.jpg" alt="avatar" className="w-8 h-8 rounded-full" /></a>
        <span className="ml-2">adamwathan</span>
      </li>
    </ul>
    <h3 className="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">Online — 243</h3>
    <ul className="mb-6 truncate">
      <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
        <a href="https://google.com" className="flex items-center">
          <span className="flex-none" />
        </a>
        <a href="https://google.com"><img src="/avatar2.jpg" alt="avatar" className="w-8 h-8 rounded-full" /></a>
        <span className="ml-2">adamwathan</span>
      </li>
    </ul>
  </div>
);

export default ChannelParticipants;
