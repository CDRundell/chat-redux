import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';


class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = { value: "" };
    // this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      // this.setState({ value: event.target.value },
      //   () => this.props.createMessage(this.state.value)
      // );
      this.props.createMessage(event.target.value);
      event.target.value = "";
    }
  }

  render () {
    return (
      <input type="text" placeholder="enter here" onKeyPress={ this.onKeyUp } ></input>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
