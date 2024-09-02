import express, { Request, Response } from "express";
import { db } from "./db";
import * as sc from "./schema";
import jwt from "jsonwebtoken";
import { IpInfoResponse } from "./types";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import * as q from "drizzle-orm";
import { authenticateJWT } from "./middleware";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: { id: number, sessionId: number };
    }
  }
}

const app = express();

app.use(express.json());
console.log(process.env.CLIENT_URL);

app.use(
  cors({
    origin: process.env.CLIENT_URL!,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers["authorization"] as string | undefined;
    const prevToken = authHeader?.split(" ")[1];

    const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const { screenHeight, screenWidth, referrer } = req.body;

    const ipDetails = await getIpDetails(typeof ipAddress === "string" ? ipAddress : "");

    if (prevToken) {
      const decodedToken = jwt.verify(prevToken, process.env.JWT_SECRET_KEY!);
      const userId = (decodedToken as { id: number }).id;
      const [userSession] = await db
        .insert(sc.userSession)
        .values({
          userId: userId,
          startedAt: new Date(),
        })
        .returning();
      const token = jwt.sign(
        { id: userId, sessionId: userSession.id },
        process.env.JWT_SECRET_KEY!
      );
      return res.json({ data: token });
    }

    const [user] = await db.insert(sc.users).values({}).returning();

    await db.insert(sc.userDetails).values({
      userId: user.id,
      ...ipDetails,
      screenHeight,
      screenWidth,
      userAgent,
      referrerUrl: referrer,
      createdAt: new Date(),
    });

    const [userSession] = await db
      .insert(sc.userSession)
      .values({
        userId: user.id,
        startedAt: new Date(),
      })
      .returning();
    const token = jwt.sign({ id: user.id, sessionId: userSession.id }, process.env.JWT_SECRET_KEY!);

    console.log(token);

    res.json({ data: token });
  } catch (error: any) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

app.post("/end-session", authenticateJWT, async (req: Request, res: Response) => {
  try {
    console.log("end-session");
    if (req.user) {
      await db
        .update(sc.userSession)
        .set({ endedAt: new Date() })
        .where(q.eq(sc.userSession.id, req.user.sessionId));
      res.sendStatus(200);
    } else {
      res.status(401).json({ error: "User not authenticated" });
    }
  } catch (error: any) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

const getIpDetails = async (ipAddress: string) => {
  const res = await axios.get<IpInfoResponse>(
    `https://ipinfo.io/${ipAddress}?token=${process.env.IPINFO_TOKEN}`
  );
  return res.data;
};

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
