-- Authenticationのユーザを作成する
WITH credentials(id, mail, pass) AS (
  SELECT * FROM (VALUES 
    ('10000000-0000-0000-0000-000000000000', 'sato@example.com', 'sato'), 
    ('20000000-0000-0000-0000-000000000000', 'kato@example.com', 'kato'), 
    ('30000000-0000-0000-0000-000000000000', 'ando@example.com', 'ando'), 
    ('40000000-0000-0000-0000-000000000000', 'kondo@example.com', 'kondo'),
    ('50000000-0000-0000-0000-000000000000', 'sudo@example.com', 'sudo')
  ) AS users(id, mail, pass)
),
create_user AS (
  INSERT INTO auth.users (id, instance_id, ROLE, aud, email, raw_app_meta_data, raw_user_meta_data, is_super_admin, encrypted_password, created_at, updated_at, last_sign_in_at, email_confirmed_at, confirmation_sent_at, confirmation_token, recovery_token, email_change_token_new, email_change)
    SELECT id::uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', mail, '{"provider":"email","providers":["email"]}', '{}', FALSE, crypt(pass, gen_salt('bf')), NOW(), NOW(), NOW(), NOW(), NOW(), '', '', '', '' FROM credentials
  RETURNING id
)
INSERT INTO auth.identities (id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  SELECT gen_random_uuid(), id, id, json_build_object('sub', id), 'email', NOW(), NOW(), NOW() FROM create_user;

-- ユーザを追加する
INSERT INTO z_user (uid, name, created_at) VALUES ('10000000-0000-0000-0000-000000000000', '佐藤', NOW());
INSERT INTO z_user (uid, name, created_at) VALUES ('20000000-0000-0000-0000-000000000000', '加藤', NOW());
INSERT INTO z_user (uid, name, created_at) VALUES ('30000000-0000-0000-0000-000000000000', '安藤', NOW());
INSERT INTO z_user (uid, name, created_at) VALUES ('40000000-0000-0000-0000-000000000000', '近藤', NOW());
INSERT INTO z_user (uid, name, created_at) VALUES ('50000000-0000-0000-0000-000000000000', '須藤', NOW());

-- お気に入り動物を追加する
INSERT INTO z_favorite_animal ("user", name) VALUES (1, 'ペンギン');
INSERT INTO z_favorite_animal ("user", name) VALUES (1, 'シャチ');
INSERT INTO z_favorite_animal ("user", name) VALUES (1, 'カマイルカ');
INSERT INTO z_favorite_animal ("user", name) VALUES (2, '犬');
INSERT INTO z_favorite_animal ("user", name) VALUES (2, '猫');
INSERT INTO z_favorite_animal ("user", name) VALUES (3, 'ワオキツネザル');
INSERT INTO z_favorite_animal ("user", name) VALUES (4, 'ウサギ');
INSERT INTO z_favorite_animal ("user", name) VALUES (4, 'ハリネズミ');
INSERT INTO z_favorite_animal ("user", name) VALUES (4, 'モルモット');
INSERT INTO z_favorite_animal ("user", name) VALUES (5, 'タコ');
INSERT INTO z_favorite_animal ("user", name) VALUES (5, 'イカ');
INSERT INTO z_favorite_animal ("user", name) VALUES (5, 'マグロ');
INSERT INTO z_favorite_animal ("user", name) VALUES (5, 'サーモン');
