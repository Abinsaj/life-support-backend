import express from "express"
import LiveClassController from "../controllers/LiveClassController.js"
import LiveClassModel from "../models/LiveClass.js"
import UserModel from "../models/User.js"
import LiveClassRepository from "../repositories/LiveClassRepository.js"
import LiveClassService from "../services/LiveClassService.js"
import multer from 'multer';

const liveClassRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const liveClassRepository = new LiveClassRepository(LiveClassModel)
const liveClassService = new LiveClassService(liveClassRepository)

liveClassRouter.get("/", LiveClassController.getAllLiveClasses(liveClassService))
liveClassRouter.post("/",upload.single("image"),LiveClassController.createLiveClass(liveClassService),)


export default liveClassRouter
