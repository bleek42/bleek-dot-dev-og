import { useEffect, useReducer } from "react";
import { API_URL, API_TOKEN } from "../api-config";

const initState = {
	profile: {},
	loading: false,
	error: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "LOADING":
			return { profile: null, error: null, loading: action.payload };
		case "SUCCESS":
			return { profile: action.payload, loading: false, error: false };
		case "ERROR":
			return { profile: null, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const useRequest = () => {
	const [state, dispatch] = useReducer(reducer, initState);
	console.log(dispatch);
	useEffect(() => {
		let ignore = false;
		dispatch({ type: "LOADING", payload: true })(async () => {
			try {
				const req = {
					Authorization: `Bearer ${API_TOKEN}`,
				};
				const res = await fetch(API_URL, req);
				const data = await res.json();
				if (!ignore) dispatch({ type: "SUCCESS", payload: data });
			} catch {
				dispatch({ type: "ERROR", payload: true });
			}
		})();
		return () => {
			ignore = true;
		};
	}, [state]);

	return state;
};
