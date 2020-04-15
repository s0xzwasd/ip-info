import { SHOW_LOADER, HIDE_LOADER } from '../types';

const initialState = {
  loading: 'loading',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
