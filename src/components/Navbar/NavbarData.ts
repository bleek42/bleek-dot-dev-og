import React from 'react';
import { VscCommentDiscussion, VscCode, VscSymbolArray } from 'react-icons/vsc';
import { RiBracesFill } from 'react-icons/ri';

interface NavData {
  title: string[];
  path: string[];
  icon: any | null;
  className: string[];
}

export const NavbarData: NavData  = [
	{
		title: 'Home',
		path: '/',
		icon: <RiBracesFill />,
		className: string: 'home',
	},
	{
		title: 'About',
		path: '/about',
		icon: <VscSymbolArray />,
		className: 'about',
	},
	{
		title: 'Contact',
		path: '/contact',
		icon: <VscCommentDiscussion />,
		className: 'contact',
	},
	{
		title: 'Projects',
		path: '/projects',
		icon: <VscCode />,
		className: 'projects',
	},
];
