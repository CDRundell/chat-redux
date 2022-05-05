// TODO: add and export your own actions
export function setMessageList() {
  const url = 'https://wagon-chat.herokuapp.com/general/messages'
  const promise = fetch(url).then(response => response.json());
  return {
    type: "SET_MESSAGE_LIST",
    payload: promise
  };
}

export function createMessage(content) {
  const url = `https://wagon-chat.herokuapp.com/general/messages`;
  const author = `anonymous${Math.floor(10 + (Math.random() * 90))}`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'Application/jeson'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "MESSAGE_POSTED",
    payload: promise
  };
}
