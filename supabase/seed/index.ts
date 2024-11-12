import { Client } from 'pg';
import { LANGUAGES, POSTS, USERS } from './data';
import type { Post, User } from './type';

const client = new Client({
  host: process.env.SEED_SUPABASE_HOST,
  database: process.env.SEED_SUPABASE_NAME,
  port: Number(process.env.SEED_SUPABASE_PORT),
  user: process.env.SEED_SUPABASE_USER,
  password: process.env.SEED_SUPABASE_PASS,
});

async function addUsers(users: User[]) {
  await client.query(`
    INSERT INTO "user" (uid, name)
    VALUES ${users.map((user) => `('${user.uid}', '${user.name}')`).join(', ')}
  `);
}

async function addLanguages(languages: string[]) {
  await client.query(`
    INSERT INTO language (name)
    VALUES ${languages.map((lang) => `('${lang}')`).join(', ')}
  `);
}

async function addPost(posts: Post[]) {
  await Promise.all(
    posts.map(async (post) => {
      const res = await client.query(`SELECT id FROM language WHERE name = '${post.lang}'`);
      const langId = res.rows[0].id as number;
      await client.query(`
      INSERT INTO post (user_uid, title, description, code, lang_id)
      VALUES ('${post.user_uid}', '${post.title}', '${post.description}', '${post.code}', ${langId})
    `);
    }),
  );
}

async function seed() {
  await addUsers(USERS);
  await addLanguages(LANGUAGES);
  await addPost(POSTS);
}

async function main() {
  await client.connect();

  await seed();

  await client.end();
}

void main();
