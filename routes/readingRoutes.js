import express from "express";
import Reading from "../models/Reading.js";
const router = express.Router();
router.post("/", async (req,res)=>{try{res.status(201).json({message:"Reading saved",reading:await Reading.create(req.body)});}catch(e){res.status(400).json({message:e.message});}});
router.get("/", async (_,res)=>{try{res.json(await Reading.find().sort({createdAt:-1}).limit(500));}catch(e){res.status(500).json({message:e.message});}});
router.delete("/:id", async (req,res)=>{try{await Reading.findByIdAndDelete(req.params.id);res.json({message:"Reading deleted"});}catch(e){res.status(500).json({message:e.message});}});
export default router;
