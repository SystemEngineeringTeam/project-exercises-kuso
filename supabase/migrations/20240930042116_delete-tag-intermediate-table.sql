alter table "public"."post_tag"
drop constraint "post_tag_tag_id_fkey";

alter table "public"."tag"
drop constraint "tag_pkey";

drop index if exists "public"."tag_pkey";

drop table "public"."tag";

alter table "public"."post_tag"
drop column "tag_id";

alter table "public"."post_tag"
add column "tag" text not null;
