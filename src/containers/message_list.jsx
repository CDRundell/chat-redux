import React, { Component } from 'react';
import Message from '../components/message';
import SearchBar from '../components/search_bar';


class MessageList extends Component {
  render () {
    return (
      <div>
        <h1>MESSAGES:</h1>
        <Message />
        <SearchBar />
      </div>
    )
  }
}

export default MessageList;
