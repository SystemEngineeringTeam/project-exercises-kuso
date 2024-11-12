alter table "public"."user"
drop constraint "user_pkey";

drop index if exists "public"."user_pkey"
