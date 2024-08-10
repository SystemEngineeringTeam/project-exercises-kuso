# Supabase Setup

## ログイン
Supabase アカウントでログインする.

```shell
yarn supabase login
```

## リンク
プロジェクトとローカル環境の Supabase と連携

```shell
yarn supabase  link --project-ref <project-ref>
```

## プル
Supabase からデータをプル

```shell
yarn supabase db pull
```

## 起動
ローカル環境の Supabase を起動する.
http://127.0.0.1:54323/ で見れます

```shell
yarn supabase start
```

## 停止
ローカル環境の Supabase を停止

```shell
yarn supabase stop
```

## migration ファイルを作成
migration ファイルを作成
```shell
yarn supabase migrate new <name>
```

差分を保存
```sql
yarn supabase db diff --schema public
```

## ローカルDBをリセット
```shell
yarn supabase db reset
```
