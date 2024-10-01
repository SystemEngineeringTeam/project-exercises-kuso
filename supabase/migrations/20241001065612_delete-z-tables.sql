drop policy "本人のみ" on "public"."z_favorite_animal";

drop policy "本人のみ" on "public"."z_user";

alter table "public"."z_favorite_animal"
drop constraint "z_favorite_animal_user_fkey";

alter table "public"."z_favorite_animal"
drop constraint "z_favorite_animal_pkey";

alter table "public"."z_user"
drop constraint "user_sample_pkey";

drop index if exists "public"."user_sample_pkey";

drop index if exists "public"."z_favorite_animal_pkey";

drop table "public"."z_favorite_animal";

drop table "public"."z_user";
