import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';
import SearchBar from '../components/search_bar';

class MessageList extends Component {
  // componentWillMount() {
  //   this.props.setMessageList();
  // }

  render () {
    return (
      <div>
        {this.props.messages.messageList.map((messageInfo) => {
          return (
            <Message message={messageInfo} key={messageInfo.created_at}/>
          )
        })}
        <SearchBar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators (
//     { setMessageList : setMessageList },
//     dispatch
//   )
// }

export default connect(mapStateToProps, null)(MessageList);
