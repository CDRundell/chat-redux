const SET_CURRENT_USER = 'SET_CURRENT_USER';

const currentUserReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type = SET_CURRENT_USER) {
    return action.payload
  } {
    return state;
  }
};

export default currentUserReducer;
