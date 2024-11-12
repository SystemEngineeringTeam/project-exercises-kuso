import type { LANGUAGES, USERS } from './data';

export interface User {
  uid: string;
  name: string;
}

export interface Post {
  user_uid: (typeof USERS)[number]['uid'];
  title: string;
  description: string;
  code: string;
  lang: (typeof LANGUAGES)[number];
}
