alter table "public"."post"
alter column "user_uid"
set default auth.uid ();

create policy "全ユーザ読み込み可" on "public"."crazy_score" as permissive for
select
    to public using (true);

create policy "認証済みのみ書き込み可ï" on "public"."crazy_score" as permissive for insert to authenticated
with
    check (true);

create policy "全ユーザ読み込み可" on "public"."language" as permissive for
select
    to public using (true);

create policy "認証済みのみ書き込み可ï" on "public"."language" as permissive for insert to authenticated
with
    check (true);

create policy "全ユーザ読み込み可" on "public"."post" as permissive for
select
    to public using (true);

create policy "認証済みのみ書き込み可ï" on "public"."post" as permissive for insert to authenticated
with
    check (true);

create policy "全ユーザ取得可ï" on "public"."post_tag" as permissive for
select
    to public using (true);

create policy "認証済みのみ書き込み可" on "public"."post_tag" as permissive for insert to authenticated
with
    check (true);

create policy "全ユーザ取得可ï" on "public"."user" as permissive for
select
    to public using (true);

create policy "認証済みのみ書き込み可ï" on "public"."user" as permissive for insert to authenticated
with
    check (true);
