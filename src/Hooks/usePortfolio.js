import { useReducer, useEffect } from 'react';
import { API_URL } from '../api-config';

const ACTIONS = {
    REQ_PROFILE: 'req-profile',
    RES_PROFILE: 'res-profile',
    TOGGLE_NAV: 'toggle-nav',
    ERROR: 'error'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.REQ_PROFILE:
            return { loading: true, profile: {} };
        case ACTIONS.RES_PROFILE:
            return { ...state, loading: false, profile: action.payload.profile }
        case ACTIONS.TOGGLE_NAV:
            return { ...state, toggle: action.payload.toggle }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, profile: {} }
        default:
            return state;
    }
}

const usePortfolio = () => {

    const [state, dispatch] = useReducer(reducer, { profile: {}, toggle: false, loading: true })

    useEffect(() => {
        dispatch({ type: ACTIONS.REQ_PROFILE })
        fetch(API_URL).then(res => res.json()).then(data => )
        return () => {
            cleanup
        }
    }, [])

    // useEffect((profile) => {
    //     const fetchData = async () => {
    //         try {
    //             const req = {
    //                 Authorization: `Bearer ${API_TOKEN}`,
    //             };
    //             const res = await fetch(API_URL, req);
    //             const data = await res.json();
    //             setProfile(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // },
    //     [profile],
    // );

    return state;
}
