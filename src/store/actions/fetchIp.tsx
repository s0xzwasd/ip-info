import { Dispatch } from 'react';
import { FETCH_IP } from '../types';

export default function fetchIP() {
  return async (dispatch: Dispatch<any>) => {
    const response = await fetch('http://ip-api.com/json');
    const json = await response.json();

    dispatch({ type: FETCH_IP, payload: json });
  };
}
