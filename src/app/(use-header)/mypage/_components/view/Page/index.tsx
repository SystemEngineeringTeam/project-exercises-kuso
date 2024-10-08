'use client';

import { Post } from '@/types/post';
import styles from './index.module.scss';

const articles: Post[] = [
  {
    id: 1,
    code: 'var num;',
    description: 'varは使わない方がいいらしいね',
    title: 'jsでvar使ってみた',
    crazy_score: 3.4,
    post_tags: [
      { id: 2, post_id: 4, tag: 'var' },
      { id: 1, post_id: 2, tag: 'js' },
    ],
    user: {
      id: 1,
      name: 'へのへのもへじ',
      uid: 'ghjkjcfhvbnfalzbsdvgfakndkvadaaf',
      created_at: new Date('2022/08/25'),
      deleted_at: null,
    },
    language: { id: 3, name: 'JavaScript' },
    created_at: new Date('2022/08/25'),
    deleted_at: null,
  },
  {
    id: 2,
    code: "const [firstName, setFirstName] = useState('');\n const [lastName, setLastName] = useState('');\n const [fullName, setFullName] = useState('');\n \n useEffect(() => {\n   setFullName(`${firstName} ${lastName}`);\n }, [firstName, lastName]);",
    description: 'stateに依存するものはstateに突っ込んでuseEffectで変更しよう!',
    title: 'useEffectの使い方',
    crazy_score: 1.4,
    post_tags: [
      { id: 4, post_id: 4, tag: 'react' },
      { id: 4, post_id: 4, tag: 'react' },
    ],
    user: {
      id: 2,
      name: '愛工太郎',
      uid: 'fgahjksdnfgvaofawesdrf',
      created_at: new Date('2023/02/22'),
      deleted_at: null,
    },
    language: { id: 3, name: 'JavaScript' },
    created_at: new Date('2022/08/30'),
    deleted_at: null,
  },
  {
    id: 3,
    code: "const [firstName, setFirstName] = useState('');\n const [lastName, setLastName] = useState('');\n const [fullName, setFullName] = useState('');\n \n useEffect(() => {\n   setFullName(`${firstName} ${lastName}`);\n }, [firstName, lastName]);",
    description: 'stateに依存するものはstateに突っ込んでuseEffectで変更しよう!',
    title: 'useEffectの使い方',
    crazy_score: 1.4,
    post_tags: [
      { id: 4, post_id: 4, tag: 'react' },
      { id: 4, post_id: 4, tag: 'react' },
    ],
    user: {
      id: 2,
      name: '愛工太郎',
      uid: 'fgahjksdnfgvaofawesdrf',
      created_at: new Date('2023/02/22'),
      deleted_at: null,
    },
    language: { id: 3, name: 'JavaScript' },
    created_at: new Date('2022/08/30'),
    deleted_at: null,
  },
  {
    id: 4,
    code: "const [firstName, setFirstName] = useState('');\n const [lastName, setLastName] = useState('');\n const [fullName, setFullName] = useState('');\n \n useEffect(() => {\n   setFullName(`${firstName} ${lastName}`);\n }, [firstName, lastName]);",
    description: 'stateに依存するものはstateに突っ込んでuseEffectで変更しよう!',
    title: 'useEffectの使い方',
    crazy_score: 1.4,
    post_tags: [
      { id: 4, post_id: 4, tag: 'react' },
      { id: 4, post_id: 4, tag: 'react' },
    ],
    user: {
      id: 2,
      name: '愛工太郎',
      uid: 'fgahjksdnfgvaofawesdrf',
      created_at: new Date('2023/02/22'),
      deleted_at: null,
    },
    language: { id: 3, name: 'JavaScript' },
    created_at: new Date('2022/08/30'),
    deleted_at: null,
  },
  {
    id: 5,
    code: "const [firstName, setFirstName] = useState('');\n const [lastName, setLastName] = useState('');\n const [fullName, setFullName] = useState('');\n \n useEffect(() => {\n   setFullName(`${firstName} ${lastName}`);\n }, [firstName, lastName]);",
    description: 'stateに依存するものはstateに突っ込んでuseEffectで変更しよう!',
    title: 'useEffectの使い方',
    crazy_score: 1.4,
    post_tags: [
      { id: 4, post_id: 4, tag: 'react' },
      { id: 4, post_id: 4, tag: 'react' },
    ],
    user: {
      id: 2,
      name: '愛工太郎',
      uid: 'fgahjksdnfgvaofawesdrf',
      created_at: new Date('2023/02/22'),
      deleted_at: null,
    },
    language: { id: 3, name: 'JavaScript' },
    created_at: new Date('2022/08/30'),
    deleted_at: null,
  }
];

export default function Page() {
  return (
    <div>
      {articles.map((post) => {
        return (
          <div className={styles.container}>
            <h1>{post.title}</h1>
            <div className={styles.tags}>
              {post.post_tags.map((tag) => {
                return <p>{tag.tag}</p>; //←tagが番号しかなく、tagの名前がないが表示はどうしたらいい？
              })}
            </div>
            <p>{post.description}</p>
            <details>
              <summary>Code</summary>
              <p>{post.code}</p>
            </details>
            <div className={styles.score_box}>
              <div className={styles.kuso_box}>
                <img style={{ ['--score' as string]: `${post.crazy_score * 20}%` }} src="unko.svg" alt="unko" />
                <img src="unko.svg" alt="unko" />
              </div>
              <p>{post.crazy_score}</p>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
