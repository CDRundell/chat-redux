export const SET_MESSAGE_LIST = 'SET_MESSAGE_LIST';

const messageListReducer = (state, action) => {
  if (state === undefined) {
    return {};
  }
  if (action.type === "SET_MESSAGE_LIST") {
    return action.payload.messages;
  } else if (action.type === "MESSAGE_POSTED") {
    const copiedState = state.slice(0);
    copiedState.push(action.payload);
    return copiedState;
  }
  return state;
};

export default messageListReducer;
