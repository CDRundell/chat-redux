import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessageList } from '../actions';


import Message from '../components/message';
import SearchBar from '../components/search_bar';


class MessageList extends Component {
  componentWillMount() {
    this.props.setMessageList();
  }

  render () {
    const { messageList } = this.props.messageList;
    return (
      <div>
        {messageList.map((messageInfo) => {
          return (
            <Message message={messageInfo} key={messageInfo.created_at} />
          );
        })}
        <SearchBar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messageList: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    { setMessageList : setMessageList },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
