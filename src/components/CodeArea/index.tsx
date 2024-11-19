import { Prism } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './index.module.scss';

interface Props {
  language: string;
  code: string;
}

export default function CodeArea({ language, code }: Props) {
  return (
    <Prism className={styles.codeArea} language={language} PreTag="div" style={oneLight}>
      {code.replace(/\n$/, '')}
    </Prism>
  );
}
