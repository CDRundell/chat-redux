// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messageListReducer from './reducers/message_list_reducer';
import channelListReducer from './reducers/channel_list_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// State and reducers
const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});

const initialMessages = [
  {
    "author": "anonymous92",
    "content": "Hello world!",
    "created_at": "2017-09-26T23:03:16.365Z"
  },
  {
    "author": "anonymous77",
    "content": "My name is anonymous77",
    "created_at": "2017-09-26T23:03:21.194Z"
  }
];


const initialState = {
  messageList: initialMessages,
  channelList: ['general', 'react', 'paris'],
  // currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  //  || prompt("What is your username?")
  selectedChannel: "general",
};

const middlewares = applyMiddleware(reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, { messageList: initialMessages }, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default initialState.currentUser;
