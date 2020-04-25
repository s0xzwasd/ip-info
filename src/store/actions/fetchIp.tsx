import { Dispatch } from 'react';
import { FETCH_IP } from '../types';

export default function fetchIP() {
  const apiBase = 'http://ip-api.com/json';
  const fields = 'status,message,country,lat,lon,currency,isp,mobile,proxy,hosting,query';

  return async (dispatch: Dispatch<any>) => {
    const response = await fetch(`${apiBase}?fields=${fields}`);
    const json = await response.json();

    dispatch({ type: FETCH_IP, payload: json });
  };
}
