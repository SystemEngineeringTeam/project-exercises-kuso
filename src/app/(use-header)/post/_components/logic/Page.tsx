import { useState } from 'react';
import Page from '../view/Page';

interface Post {
  title: string;
  description: string;
  tags: string[];
  code: string;
  language: string;
}

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({
    title: '',
    description: '',
    tags: [],
    code: '',
    language: '',
  });

  // titleをセットする関数
  function setTitle(title: string) {
    setPost((prev) => ({ ...prev, title }));
  }

  // descriptionをセットする関数
  function setDescription(description: string) {
    setPost((prev) => ({ ...prev, description }));
  }
  // languageをセットする関数
  function setTags(tags: string[]) {
    setPost((prev) => ({ ...prev, tags }));
  }

  // tagをセットする関数
  function setCode(code: string) {
    setPost((prev) => ({ ...prev, code }));
  }
  // languageをセットする関数
  function setLanguage(language: string) {
    setPost((prev) => ({ ...prev, language }));
  }

  // 投稿処理
  function submit() {
    // ここで投稿処理を行う
    console.log(post); // eslint-disable-line no-console
  }

  return (
    <Page
      post={post}
      setTitle={setTitle}
      setDescription={setDescription}
      setTags={setTags}
      setCode={setCode}
      submit={submit}
    />
  );
}
