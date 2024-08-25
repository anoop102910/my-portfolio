CREATE TABLE IF NOT EXISTS "user_sessions" (
	"user_id" integer PRIMARY KEY NOT NULL,
	"started_at" timestamp NOT NULL,
	"ended_at" timestamp NOT NULL,
	"duration" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
