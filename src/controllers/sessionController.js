import { userModel } from "../models/userModel.js";
import { createHash } from "../utils/bcrypt.js";
export async function register (req, res) {
    try {
        const {first_name, last_name, email, password} = req.body
        
            if(!first_name || !last_name || !email || !password){
                return res.status(400).json({
                    message: "Todos los campos son obligatorios"
                })
            } 
            if(password.length < 8){
                return res.status(400).json({
                    message: "La contraseña debe tener al menos 8 caracteres."
                });
            }

            const hashedPassword = await createHash(password)
            const newUser = await userModel.create({
                    first_name, 
                    last_name, 
                    email,
                    password: hashedPassword
                })
           
            res.status(201).json({
                status:"success",
                payload: {
                    id: newUser._id,
                    first_name: newUser.first_name,
                    last_name: newUser.last_name,
                    email: newUser.email,
                    role: newUser.rol
                }
            })

    } catch (error) {
        if (error.code === 11000){
            return res.status(409).json({error:'Este email ya fue usado'})
        }

        if (error.name === 'ValidationError'){
            return res.status(400).json(
                {
                error: error.errors.email.message
                }
            )
        }
        
        return res.status(500).json({error: "Error interno del servidor."}); 
    }
    
}

export function login (req, res) {
    res.status(503).json({
        message: 'login no disponible por el momento'
    })
}