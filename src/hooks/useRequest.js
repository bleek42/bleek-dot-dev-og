import { useEffect, useReducer } from 'react';
import { API_URL, API_TOKEN } from 'src/constants/api-creds';

const initState = {
  profile: {},
  loading: false,
  error: null,
  msg: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, loading: true, error: false, msg: 'Requesting from data...' };
    case 'SUCCESS':
      return {
        ...state,
        profile: action.payload,
        loading: false,
        msg: 'Successful request!',
      };
    case 'ERROR':
      return { ...state, loading: false, error: true, msg: action.payload };
    default:
      return state;
  }
};

export const useRequest = () => {
  const [{ profile, loading, error }, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const req = {
          Authorization: `Bearer ${API_TOKEN}`,
        };
        const res = await fetch(API_URL, req);
        if (!res.ok) dispatch({ type: 'ERROR', payload: res.statusText });
        const data = await res.json();
        if (!ignore) dispatch({ type: 'SUCCESS', payload: data });
      } catch {
        dispatch({ type: 'ERROR', payload: 'Internal Server Error' });
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return { profile, loading, error };
};
