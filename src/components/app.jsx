import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="app">
      <div>
        <ChannelList />
        <MessageList />
      </div>
    </div>
  );
};

export default App;
