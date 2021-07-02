/* eslint-disable max-len */
import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import ServerBar from './components/server-bar';
import Header from './components/header';
import ChannelList from './components/channel-list';
import ChatWindow from './components/chat-window';
import ChannelParticipants from './components/channel-participants';

function App() {
  return (
    <RecoilRoot>
      <div className="flex">
        <ServerBar />
        <div className="flex-1 flex flex-col min-h-screen h-screen">
          <Header />
          <div className="flex-1 flex overflow-y-hidden">
            <ChannelList />
            <div className="flex-1 flex justify-between">
              <ChatWindow />
              <ChannelParticipants />
            </div>
          </div>
        </div>
      </div>

    </RecoilRoot>
  );
}

export default App;
