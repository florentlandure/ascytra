import { IMenuItem } from '../models';

export const MENU_ITEMS_LIST: IMenuItem[] = [
  {
    label: 'Home',
    href: '/',
    target: '_self',
  },
  {
    label: 'Articles',
    href: '/articles',
    target: '_self',
  },
  {
    label: 'Github',
    href: 'https://github.com/florentlandure',
    target: '_blank',
    icon: 'github',
  },
  {
    label: 'Twitter',
    href: 'http://linkedin.com/in/florent-landuré-060808b2',
    target: '_blank',
    icon: 'twitter',
  },
];
