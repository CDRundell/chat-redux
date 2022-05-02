const SELECTED_CHANNEL = 'SELECTED_CHANNEL';

const selectedChannelReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type = SELECTED_CHANNEL) {
    return action.payload
  } {
    return state;
  }
};

export default selectedChannelReducer;
