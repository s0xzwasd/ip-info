import { FETCH_IP } from '../types';

const initialState = {
  ip: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IP:
      return { ...state, ip: action.payload };
    default:
      return state;
  }
};
