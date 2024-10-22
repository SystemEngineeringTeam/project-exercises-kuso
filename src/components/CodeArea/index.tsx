import { Prism } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  language: string;
  code: string;
}

export default function CodeArea({ language, code }: Props) {
  return (
    <Prism language={language} PreTag="div" style={oneLight}>
      {code.replace(/\n$/, '')}
    </Prism>
  );
}
