import { useEffect, useReducer } from 'react';
import { API_URL, API_TOKEN } from '../constants/config';

interface State {
  profile: {};
  loading: boolean;
  error: null | boolean | {};
  msg?: string;
}

enum ACTION_TYPES {
  'REQUEST' = 'REQUEST',
  'SUCCESS' = 'SUCCESS',
  'ERROR' = 'ERROR',
}

type Actions = {
  [K in keyof ACTION_TYPES]: {
    type: ACTION_TYPES[K];
    payload: {};
  };
}[keyof ACTION_TYPES];

const initState: State = {
  profile: {},
  loading: false,
  error: null,
  msg: '',
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        msg: 'Sending request to server...',
      };
    case 'SUCCESS':
      return {
        ...state,
        profile: action.payload,
        loading: false,
        msg: 'OK: Successful request!',
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: true,
        msg: 'ERROR: Unsuccessful Request!',
      };
    default:
      return state;
  }
};

export const useRequest = () => {
  const [{ profile, loading, error, msg }, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const req: RequestInit = {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
          cache: 'force-cache',
        };
        const res: Response = await fetch(API_URL, req);
        if (!res.ok) dispatch({ type: 'ERROR', payload: {} });
        const data = await res.json();
        if (!ignore && data) dispatch({ type: 'SUCCESS', payload: data });
      } catch {
        dispatch({ type: 'ERROR', payload: 'Internal Server Error' });
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  return { profile, loading, error, msg };
};
