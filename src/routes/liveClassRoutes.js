import express from "express"
import LiveClassController from "../controllers/LiveClassController.js"
import LiveClassRepository from "../repositories/LiveClassRepository.js"
import LiveClassService from "../services/LiveClassService.js"
import liveClassModel from "../models/LiveClass.js"
import multer from 'multer';
import AuthRepository from "../repositories/AuthRepository.js"
import authModel from "../models/User.js"

const liveClassRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const liveClassRepository = new LiveClassRepository(liveClassModel)
const authRepository = new AuthRepository(authModel)
const liveClassService = new LiveClassService(liveClassRepository,authRepository)

liveClassRouter.get("/", LiveClassController.getAllLiveClasses(liveClassService))
liveClassRouter.post("/",upload.single("image"),LiveClassController.createLiveClass(liveClassService),)


export default liveClassRouter
