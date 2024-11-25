import type { Post, User } from './type';

export const USERS = [
  {
    uid: '5e8adc11-e8a8-40ce-96e3-3a5642000348',
    name: 'takumi',
  },
  {
    uid: '4a7b4c52-d9f5-4d5e-927d-f7f6b200184a',
    name: 'hiroshi',
  },
  {
    uid: '3f2adc53-a1b8-4a7c-85b3-1a2dc4a00194',
    name: 'yuki',
  },
  {
    uid: '6d4b2c18-b5c7-4d9e-95a3-4a3fc5000834',
    name: 'akiko',
  },
  {
    uid: '2e5b7d11-f9a3-45ce-98f4-8b7dc4000912',
    name: 'naoki',
  },
  {
    uid: '7a9adc92-e8a1-42d5-96e5-9c4f32000358',
    name: 'kaori',
  },
  {
    uid: '8e7adc31-d1a2-4b9c-85c6-3a5bc2001243',
    name: 'ryo',
  },
  {
    uid: '1d5b3c71-c8f3-48ae-92d5-6b2ac4002145',
    name: 'mio',
  },
  {
    uid: '9b2adc23-b5a7-41c9-94d3-5a7f84001167',
    name: 'shun',
  },
  {
    uid: '0c4b1d12-d9e4-4c5f-95a2-8a3b74000981',
    name: 'emi',
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
  {
    user_uid: USERS[2].uid,
    title: 'TypeScriptで無限レンダリングを起こす方法',
    description:
      'firstName か lastName が更新されるレンダリングの後に、useEffect によって fullName の無駄なレンダリングが走ります',
    // eslint-disable-next-line no-template-curly-in-string
    code: 'const [firstName, setFirstName] = useState("");\nconst [lastName, setLastName] = useState("");\nconst [fullName, setFullName] = useState("");\n\nuseEffect(() => {\n  setFullName(`${firstName} ${lastName}`);\n}, [firstName, lastName]);',
    lang: 'TypeScript',
  },
  {
    user_uid: USERS[0].uid,
    title: '無限ループを引き起こすPythonコード',
    description: '条件式を忘れたことで無限ループが発生します。',
    code: 'while True:\n    print("無限ループだよ！")',
    lang: 'Python',
  },
  {
    user_uid: USERS[4].uid,
    title: 'JavaScriptでおなじみの「==」による比較の罠',
    description: '「==」演算子の型変換により予期せぬ動作が起きます。',
    code: 'console.log(0 == "0"); // true\nconsole.log(0 == []);  // true\nconsole.log(0 == false); // true',
    lang: 'JavaScript',
  },
  {
    user_uid: USERS[1].uid,
    title: 'CSSで理解不能なスタイルの継承を起こす方法',
    description: '多重定義されたクラスセレクタによる混乱。',
    code: '.box {\n  width: 100px;\n}\n\n.box.box-large {\n  width: 50px;\n}\n\n.box {\n  width: 150px;\n}',
    lang: 'CSS',
  },
  {
    user_uid: USERS[3].uid,
    title: 'C++で何をするのかわからないコードを書く',
    description: '一見して意味が分からないマクロを濫用した例。',
    code: '#define SQUARE(x) x*x\nint main() {\n  int result = SQUARE(1 + 2); // 期待と違う計算結果に！\n  return 0;\n}',
    lang: 'C++',
  },
  {
    user_uid: USERS[5].uid,
    title: 'Pythonでバグを生むグローバル変数の使い方',
    description: '関数内でグローバル変数を直接変更して混乱を招く例。',
    code: 'counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n    return counter\n\nprint(increment())\nprint(increment())',
    lang: 'Python',
  },
  {
    user_uid: USERS[6].uid,
    title: 'JavaScriptで「this」が予想外に振る舞う例',
    description: '「this」のコンテキストが関数の呼び出し方法で変わります。',
    code: 'const obj = {\n  value: 42,\n  getValue: function() {\n    return this.value;\n  }\n};\nconst getValue = obj.getValue;\nconsole.log(getValue()); // undefined\nconsole.log(obj.getValue()); // 42',
    lang: 'JavaScript',
  },
  {
    user_uid: USERS[7].uid,
    title: 'SQLインジェクションを防がないコード',
    description: 'ユーザ入力を直接SQLクエリに埋め込む危険な例。',
    // eslint-disable-next-line no-template-curly-in-string
    code: 'const userInput = "1 OR 1=1";\nconst query = `SELECT * FROM users WHERE id = ${userInput}`;\nconsole.log(query); // 危険なSQLクエリが生成される',
    lang: 'JavaScript',
  },
] as const satisfies Post[];
