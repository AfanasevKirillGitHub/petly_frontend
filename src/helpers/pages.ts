import { mainNav } from './interfaces/mainNav/mainNav';

export const pages: mainNav[] = [
  { name: 'News', href: '/news', id: 0 },
  { name: 'Find pet', href: '/find-pet', id: 1 },
  { name: 'Our friends', href: '/friends', id: 2 },
];

export const authPages: mainNav[] = [
  { name: 'Login', href: '/login', id: 4 },
  { name: 'Registration', href: '/registration', id: 5 },
];

export const userPage: mainNav[] = [{ name: 'Account', href: '/user', id: 6 }];

export const findPetNan: mainNav[] = [
  { name: 'sell', href: 'sell', id: 1 },
  { name: 'lost/found', href: 'lost-found', id: 2 },
  { name: 'in good hands', href: 'good-hand', id: 3 },
];

export const privateNav: mainNav[] = [
  { name: 'favorite ads', href: 'favorite', id: 4 },
  { name: 'my ads', href: 'my-ads', id: 5 },
];
