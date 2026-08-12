import express from "express";
import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js";




const PORT = ENV.PORT || 3000;

const app=express();


app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT,()=>{ 
    console.log("server running on PORT")
})