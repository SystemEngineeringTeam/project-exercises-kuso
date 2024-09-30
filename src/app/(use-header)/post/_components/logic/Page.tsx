import { useState } from 'react';

interface Post {
  title: string;
  description: string;
  tags: string[];
  code: string;
}

export default function PostPageLogic() {
  const [post, setPost] = useState<Post>({
    title: '',
    description: '',
    tags: [],
    code: '',
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

  // 投稿処理
  function submit() {
    // ここで投稿処理を行う
    console.log(post); // eslint-disable-line no-console
  }

  return {
    post,
    setTitle,
    setDescription,
    setTags,
    setCode,
    submit,
  };
}
