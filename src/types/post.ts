// ユーザーの型
export interface User {
  id: number;
  name: string;
  uid: string;
  created_at: Date;
  deleted_at: Date | null;
}

// 投稿のタグの型
export interface PostTag {
  id: number;
  post_id: number;
  tag: string;
}

// 投稿の言語の型
export interface PostLanguage {
  id: number;
  name: string;
}

// 投稿の型
export interface Post {
  id: number;
  code: string;
  description: string;
  title: string;
  crazy_score: number;
  post_tags: PostTag[];
  user: User;
  language: PostLanguage;
  created_at: Date;
  deleted_at: Date | null;
}
