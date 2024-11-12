import type { Post, User } from './type';

export const USERS = [
  {
    uid: '00000000-0000-0000-0000-000000000000',
    name: 'Alice',
  },
  {
    uid: '00000000-0000-0000-0000-000000000001',
    name: 'Bob',
  },
  {
    uid: '00000000-0000-0000-0000-000000000002',
    name: 'Charlie',
  },
] as const satisfies User[];

export const LANGUAGES = [
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Python',
  'Ruby',
  'Java',
  'C',
  'C++',
  'C#',
  'Go',
  'Rust',
  'Swift',
  'Kotlin',
  'Scala',
  'Perl',
  'PHP',
  'Shell',
  'R',
] as const satisfies string[];

export const POSTS = [
  {
    user_uid: USERS[0].uid,
    title: 'Hello, world with TypeScript!',
    description: 'This is a simple "Hello, world!" program in TypeScript.',
    code: 'console.log("Hello, world!");',
    lang: 'TypeScript',
  },
  {
    user_uid: USERS[1].uid,
    title: 'Hello, world with Python!',
    description: 'This is a simple "Hello, world!" program in Python.',
    code: 'print("Hello, world!")',
    lang: 'Python',
  },
] as const satisfies Post[];
