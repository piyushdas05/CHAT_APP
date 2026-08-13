import express from "express"
import { signup } from "../controllers/auth.controller.js"
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello user! welcoome to our chat app . it is under devolopment")
})
router.post("/signup",signup);

router.get("/login",(req,res)=>{
    res.send("login endPoint...");
})

router.get("/logout",(req,res)=>{
    res.send("logout endPoint...");
})

export default router;