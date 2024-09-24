import express from 'express'

const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hell this is user end point")
})

export default router