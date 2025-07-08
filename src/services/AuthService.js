import {  creatToken } from "../config/jwtConfig.js";
import AppError from "../utils/AppError.js";

export default class AuthService{
    constructor(userRepository){
        this.userRepository = userRepository
    }

    async register({name, email, mobile, password }){
        const existingUser = await this.userRepository.findByEmail(email);

        if(existingUser){
            throw new AppError('User already Exist',400)
        }

        const newUser = await this.userRepository.create({
            name, email, mobile, password 
        });

        return newUser;
    }

    async login({email,password}){
        const user = await this.userRepository.findByEmail(email)
        if(!user){
            throw new AppError('Invalid credentials',401)
        }

        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            throw new AppError('Invalid credentials',401)
        }

        const payload = { userId: user._id, role : user.role}

        let token = creatToken(payload)

        return {token, user}

    }

}