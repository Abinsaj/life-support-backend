import asyncHandler from "../middlewares/asyncHandler.js";

export default class AuthController {
    static register=(authService)=> 
        asyncHandler(async(req,res)=>{
            console.log(req.body,'this is the request')
            const { name, email, mobile, password } = req.body;
            const user = await authService.register({ name, email, password, mobile });
            res.status(201).json({ success: true, data: user });
        });
    

    static login = (authService)=> 
        asyncHandler(async(req,res)=>{
            console.log('its herer')
            const { email, password } = req.body;
            const { token, user } = await authService.login({ email, password });
            res.status(200).json({ success: true, token, data: user });
        })
    
}