import React, { Component } from 'react';

class Message extends Component {
  render (props) {
    let {author, content, created_at} = this.props.message;

    return (
      <div>
        <div style={{display:"flex"}}>
          <p>{author}, Posted at {created_at}</p>
        </div>
        <p>{content}</p>
      </div>
    );
  }
}


export default Message;
