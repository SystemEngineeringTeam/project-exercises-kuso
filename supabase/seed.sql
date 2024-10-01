-- user を追加する
INSERT INTO
  "user" (uid, name, created_at)
VALUES
  (
    '12000000-0000-0000-0000-000000000000',
    'Mary',
    NOW ()
  );

-- language を追加する
INSERT INTO
  "language" (name)
VALUES
  ('TypeScript');

INSERT INTO
  "language" (name)
VALUES
  ('Python');

-- post を追加する
INSERT INTO
  "post" (code, description, lang_id, title, user_uid)
VALUES
  (
    'console.log("Hello, World!");',
    'Hello, World! を表示する',
    1,
    'Hello, World! by ts',
    '12000000-0000-0000-0000-000000000000'
  );

INSERT INTO
  "post" (code, description, lang_id, title, user_uid)
VALUES
  (
    'print("Hello, World!")',
    'Hello, World! を表示する',
    2,
    'Hello, World! by python',
    '12000000-0000-0000-0000-000000000000'
  );

-- post_tag を追加する
INSERT INTO
  "post_tag" (post_id, tag)
VALUES
  (1, 'React');

INSERT INTO
  "post_tag" (post_id, tag)
VALUES
  (2, 'CPython');

-- crazy_score を追加する
INSERT INTO
  "crazy_score" (checked_user_uid, post_id, score)
VALUES
  ('12000000-0000-0000-0000-000000000000', 1, 5);

INSERT INTO
  "crazy_score" (checked_user_uid, post_id, score)
VALUES
  ('12000000-0000-0000-0000-000000000000', 2, 3);
