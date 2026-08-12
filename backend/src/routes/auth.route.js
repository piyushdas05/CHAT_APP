import express from "express"
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello user! welcoome to our chat app . it is under devolopment")
})
router.get("/signup",(req,res)=>{
    res.send("signup endPoint...");
})
router.get("/login",(req,res)=>{
    res.send("login endPoint...");
})

router.get("/logout",(req,res)=>{
    res.send("logout endPoint...");
})

export default router;