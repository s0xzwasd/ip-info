import { SHOW_LOADER, HIDE_LOADER } from '../types';

type InitialState = {
  loading: boolean;
};

const initialState: InitialState = {
  loading: false,
};

export default (state = initialState, action: any): Object => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
