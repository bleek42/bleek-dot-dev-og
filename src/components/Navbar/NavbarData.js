import React from 'react';
import { VscSymbolArray } from 'react-icons/vsc';
import { DiTerminal, DiCode } from 'react-icons/di';
import { GrContact } from 'react-icons/gr';

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <DiTerminal />,
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
    icon: <GrContact />,
    className: 'contact',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <DiCode />,
    className: 'projects',
  },
];
