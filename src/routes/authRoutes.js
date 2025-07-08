import express from 'express'
import AuthController from '../controllers/authController.js'
import authModel from '../models/User.js';
import AuthService from "../services/AuthService.js";
import AuthRepository from '../repositories/AuthRepository.js';


const authRouter = express.Router()

const userRepository = new AuthRepository(authModel);
const authService = new AuthService(userRepository);

authRouter.post('/register',AuthController.register(authService))
authRouter.post('/login',AuthController.login(authService))

export default authRouter