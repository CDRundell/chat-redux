export const SET_MESSAGE_LIST = 'SET_MESSAGE_LIST';

const messageListReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }

  if (action.type === "SET_MESSAGE_LIST") {
    return action.payload.messages;
  } {
    return state
  }
};

export default messageListReducer;
