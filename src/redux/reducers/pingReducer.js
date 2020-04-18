import { PING, PONG } from "../actions";

const initialState = { isPinging: false };

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };

    default:
      return state;
  }
};
