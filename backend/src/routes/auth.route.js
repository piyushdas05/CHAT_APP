import express from "express"
import { signup, login, logout } from "../controllers/auth.controller.js"
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello user! welcoome to our chat app . it is under devolopment")
})
router.post("/signup",signup);

router.post("/login",login)

router.post("/logout",logout)

export default router;