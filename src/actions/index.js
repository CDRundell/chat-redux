// TODO: add and export your own actions


export function setMessageList() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages'
  const promise = fetch(url).then(response => response.json());
  return {
  type: "SET_MESSAGE_LIST",
  payload: promise
  };
}

// const SET_MESSAGE_LIST = "SET_MESSAGE_LIST";
