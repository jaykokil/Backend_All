import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bottleRoutes from "./routes/bottleRoutes.js";
import stockRoutes from "./routes/stockRoutes.js";
import readingRoutes from "./routes/readingRoutes.js";
dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.get("/", (_, res) => res.json({ message: "Inventory Demo Backend Running", status: "OK" }));
app.get("/api/health", (_, res) => res.json({ message: "Backend healthy", database: mongoose.connection.readyState === 1 ? "connected" : "not connected" }));
app.use("/api/bottles", bottleRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/readings", readingRoutes);
const PORT = process.env.PORT || 5000;
if (!process.env.MONGO_URI) { console.error("MONGO_URI missing"); process.exit(1); }
mongoose.connect(process.env.MONGO_URI).then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`))).catch(e => { console.error(e); process.exit(1); });
