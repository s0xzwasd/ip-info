import { SHOW_LOADER, HIDE_LOADER, FETCH_IP } from '../types';

const initialState = {
  loading: 'loading',
  ip: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case FETCH_IP:
      return { ...state, ip: action.payload };
    default:
      return state;
  }
};
