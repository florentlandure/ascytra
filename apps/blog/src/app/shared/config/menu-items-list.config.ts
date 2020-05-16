import { IMenuItem } from '../models';

export const MENU_ITEMS_LIST: IMenuItem[] = [
  {
    label: 'Home',
    href: '/',
    isExternal: false,
  },
  {
    label: 'Articles',
    href: '/articles',
    isExternal: false,
  },
  {
    label: 'Github',
    href: 'https://github.com/florentlandure',
    icon: 'fab fa-github',
    isExternal: true,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/Ascytra',
    icon: 'fab fa-twitter',
    isExternal: true,
  },
];
