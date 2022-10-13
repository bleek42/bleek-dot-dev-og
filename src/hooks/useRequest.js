import { useEffect, useReducer } from "react";
import { API_URL, API_TOKEN } from "../api-config";

const initState = {
	profile: {},
	loading: true,
	error: null,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "SUCCESS":
			return { profile: action.payload, loading: false, error: false };
		case "ERROR":
			return { profile: null, loading: false, error: true };
		default:
			return state;
	}
};

export const useRequest = () => {
	const [{ profile, loading, error }, dispatch] = useReducer(
		reducer,
		initState,
	);
	useEffect(() => {
		let ignore = false;
		(async () => {
			try {
				const req = {
					Authorization: `Bearer ${API_TOKEN}`,
				};
				const res = await fetch(API_URL, req);
				const data = await res.json();
				if (!ignore) dispatch({ type: "SUCCESS", payload: data });
			} catch {
				dispatch({ type: "ERROR" });
			}
		})();
		return () => {
			ignore = true;
		};
	}, []);

	return { profile, loading, error };
};
