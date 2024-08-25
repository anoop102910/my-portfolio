CREATE TABLE IF NOT EXISTS "user_details" (
	"user_id" integer PRIMARY KEY NOT NULL,
	"ip" text,
	"city" text,
	"region" text,
	"country" text,
	"loc" text,
	"org" text,
	"postal" text,
	"timezone" text,
	"screen_width" integer,
	"screen_height" integer,
	"referrer_url" text,
	"user_agent" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_details" ADD CONSTRAINT "user_details_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
