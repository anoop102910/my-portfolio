import * as pg from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const users = pg.pgTable("users", {
  id: pg.serial("id").primaryKey(),
  createdAt: pg.timestamp("created_at").defaultNow(),
});

export const userDetails = pg.pgTable("user_details", {
  userId: pg
    .integer("user_id")
    .references(() => users.id, { onDelete: "cascade",onUpdate: "no action"})
    .primaryKey(),
  ip: pg.text("ip"),
  city: pg.text("city"),
  region: pg.text("region"),
  country: pg.text("country"),
  loc: pg.text("loc"),
  org: pg.text("org"),
  postal: pg.text("postal"),
  timezone: pg.text("timezone"),
  screenWidth: pg.integer("screen_width"),
  screenHeight: pg.integer("screen_height"),
  referrerUrl: pg.text("referrer_url"),
  userAgent: pg.text("user_agent"),
});

export const userSession = pg.pgTable("user_sessions", {
  userId: pg
    .integer("user_id")
    .references(() => users.id, { onDelete: "cascade" ,onUpdate: "no action"})
    .primaryKey(),
  startedAt: pg.timestamp("started_at").notNull(),
  endedAt: pg.timestamp("ended_at"),
});


// export const projectViews = pg.pgTable("project_views", {
//   projectId: pg.integer("project_id").primaryKey(),
//   userId: pg.integer("user_id").references(() => users.id, {
//     onDelete: "set null",
//     onUpdate: "no action",
//   }),
//   timestamp: pg.timestamp("timestamp").notNull().defaultNow(),
// });
