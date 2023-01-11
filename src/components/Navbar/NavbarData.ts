import React from 'react';
import { VscCommentDiscussion, VscCode, VscSymbolArray } from 'react-icons/vsc';
import { RiBracesFill } from 'react-icons/ri';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <RiBracesFill />,
    className: 'home',
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
