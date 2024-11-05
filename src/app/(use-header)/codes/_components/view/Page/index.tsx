import styles from './index.module.scss';
import CodeArea from '@/components/CodeArea';
import { type Post } from '@/types/post';

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
    },
    language: { id: 3, name: 'JavaScript' },
  },
  {
    id: 2,
    // eslint-disable-next-line no-template-curly-in-string
    code: "const [firstName, setFirstName] = useState(''); const [lastName, setLastName] = useState(''); const [fullName, setFullName] = useState('');\n \n useEffect(() => {\n   setFullName(`${firstName} ${lastName}`);}, [firstName, lastName]);",
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
    },
    language: { id: 3, name: 'JavaScript' },
  },
  {
    id: 3,
    // eslint-disable-next-line no-template-curly-in-string
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
    },
    language: { id: 3, name: 'JavaScript' },
  },
  {
    id: 4,
    // eslint-disable-next-line no-template-curly-in-string
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
    },
    language: { id: 3, name: 'JavaScript' },
  },
  {
    id: 5,
    // eslint-disable-next-line no-template-curly-in-string
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
    },
    language: { id: 3, name: 'JavaScript' },
  },
];

export default function Page() {
  return (
    <div className={styles.containers}>
      {articles.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

interface CardProps {
  post: Post;
}

function Card({ post }: CardProps) {
  return (
    <div key={post.id} className={styles.container}>
      <h1>{post.title}</h1>
      <div className={styles.tags}>
        {post.post_tags.map((tag) => (
          <p key={tag.id}>{tag.tag}</p>
        ))}
      </div>
      <p>{post.description}</p>
      <CodeArea code={post.code} language={post.language.name.toLowerCase()} />
      <div className={styles.userAndValue}>
        <div className={styles.user}>
          <img
            alt="user_icon"
            src="https://img.esa.io/uploads/production/attachments/19973/2024/10/22/148910/a3ad87c4-103f-4a77-8de4-bb1c89b42a38.png"
          />
          <p>{post.user.name}</p>
        </div>
        <div className={styles.buttons}>
          <button type="button">クソだね</button>
          <button type="button">よくないね</button>
          <button type="button">ふーん</button>
          <button type="button">へぇ、いいじゃん</button>
        </div>
      </div>
    </div>
  );
}
