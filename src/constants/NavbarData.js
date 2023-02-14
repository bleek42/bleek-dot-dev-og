import React from 'react';
import { VscCommentDiscussion, VscCode, VscSymbolArray } from 'react-icons/vsc';
import { RiBracesFill } from 'react-icons/ri';

export const NavbarData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <RiBracesFill />
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    icon: <VscSymbolArray />,
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
    icon: <VscCommentDiscussion />,
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
    icon: <VscCode />,
  },
];

