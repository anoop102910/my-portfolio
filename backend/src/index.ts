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
// import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
// app.json(cookieParser())
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
    console.log("login");

    const authHeader = req.headers["authorization"] as string | undefined;
    console.log("auzhheader", authHeader);
    const prevToken = authHeader?.split(" ")[1];
    console.log(prevToken);

    // if (prevToken!=undefined) {
    //   console.log("Previous token exists, returning response.");
    //   return res.json();
    // }
    // console.log("hello");

    const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const ipDetails = await getIpDetails(typeof ipAddress === "string" ? ipAddress : "");
    const userAgent = req.headers["user-agent"];
    const referrerUrl = req.headers["referer"];
    const { screenHeight, screenWidth } = req.body;

    const [user] = await db.insert(sc.users).values({}).returning();

    await db.insert(sc.userDetails).values({
      userId: user.id,
      ...ipDetails,
      screenHeight,
      screenWidth,
      userAgent,
      referrerUrl,
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY!);

    console.log(token);

    res.json({ data: token });
  } catch (error: any) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "An error occurred", details: error.message });
  }
});

// app.post("/start-session", authenticateJWT, async (req: Request, res: Response) => {
//   try {
//     if (req.user)
//       await db
//         .insert(sc.userSession)
//         .values({ userId: req.user.id, startedAt: new Date() })
//         .returning();
//     res.json();
//   } catch (error: any) {
//     console.error("Error occurred:", error);
//     res.status(500).json({ error: "An error occurred", details: error.message });
//   }
// });

// app.post("/end-session", authenticateJWT, async (req: Request, res: Response) => {
//   try {
//     if (req.user)
//       await db
//         .update(sc.userSession)
//         .set({ endedAt: new Date() })
//         .where(q.eq(sc.userSession.userId, req.user.id));
//     res.sendStatus(200);
//   } catch (error: any) {
//     console.error("Error occurred:", error);
//     res.status(500).json({ error: "An error occurred", details: error.message });
//   }
// });

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
