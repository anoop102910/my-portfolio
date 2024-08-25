ALTER TABLE "user_sessions" ALTER COLUMN "ended_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_sessions" DROP COLUMN IF EXISTS "duration";