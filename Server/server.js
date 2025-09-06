 import express from 'express';
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

// Initialize socket.io
export const io = new Server(server, {
  cors: { origin: "https://chattingapp-1-pt1l.onrender.com" },
});

export const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.auth.userId;
  console.log("User connected:", userId);

  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected:", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Health check
app.get("/api/status", (req, res) => res.json({ status: "Server is live" }));

// Routes
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// Connect DB
await connectDB();

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
