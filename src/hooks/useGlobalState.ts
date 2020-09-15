import React, { useState, useReducer, useContext } from 'react';

const useGlobalState = () => {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = (ev) => {
		ev.preventDefault();
		setToggle(!toggle);
	};

	return { toggle, toggleMenu };
};

export default useGlobalState;
