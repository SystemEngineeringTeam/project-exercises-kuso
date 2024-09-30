// src/app/post/page.tsx
import PostPageLogic from './_components/logic/Page';
import TopPage from './_components/view/Page'; // 本来はロジックのコンポーネントが来る

export default function Page() {
  return <PostPageLogic />;
}
