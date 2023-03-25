import React from 'react';
import { VscCommentDiscussion, VscCode, VscSymbolArray } from 'react-icons/vsc';
import { RiBracesFill } from 'react-icons/ri';

// class NavLink {
//   constructor(id, title, path, icon) {
//     this.id = id;
//     this.title = title;
//     this.path = path;
//     this.icon = icon;
//   }
// }

// const home = new NavLink(1, 'Home', '/', <RiBracesFill />);

export interface NavLink {
  id: 1 | 2 | 3 | 4 | 5;
  title: 'Home' | 'About' | 'Contact' | 'Projects' | 'Resume';
  path: '/' | '/about' | '/contact' | '/projects' | '/resume';
  icon?: '\ue555' | null;
}

export const navLinks: NavLink[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: null,
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    icon: null,
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
    icon: null,
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
    icon: null,
  },
  {
    id: 5,
    title: 'Resume',
    path: '/resume',
    icon: null,
  },
];
