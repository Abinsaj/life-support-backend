import express from "express"
import LiveClassController from "../controllers/liveClassController.js"
import LiveClassRepository from "../repositories/LiveClassRepository.js"
import LiveClassService from "../services/LiveClassService.js"
import liveClassModel from "../models/LiveClass.js"
import multer from 'multer';
import AuthRepository from "../repositories/AuthRepository.js"
import authModel from "../models/User.js"
import { checkRole, verifyToken } from "../middlewares/authMiddleware.js"

const liveClassRouter = express.Router()

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

const liveClassRepository = new LiveClassRepository(liveClassModel)
const authRepository = new AuthRepository(authModel)
const liveClassService = new LiveClassService(liveClassRepository,authRepository)

liveClassRouter.get("/", LiveClassController.getAllLiveClasses(liveClassService))
liveClassRouter.post("/",upload.single("image"),verifyToken,checkRole('doctor'),LiveClassController.createLiveClass(liveClassService),)


export default liveClassRouter
