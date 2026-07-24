import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function generateToken (user){
    return jwt.sign(user, env.JWT_SECRET,{
        expiresIn: '1h'
    } )
}

export function verifyToken(token){
    return jwt.verify(token,env.JWT_SECRET)
}