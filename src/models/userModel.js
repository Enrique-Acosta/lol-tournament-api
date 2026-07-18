import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        first_name:{
            type: String,
            required:true,
            trim:true
        },
        last_name:{
            type: String,
            required:true,
            trim:true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "el formato de email no es válido"
            ]
        },
        password: {
            type: String,
            required: true,
            minlength: [8, "La contraseña debe tener al menos 8 caracteres"]
        },
        rol: {
            type: String,
            enum: ["admin", "organizer", "user"],
            default: "user"
        }
    }
)

export const userModel= model("user", userSchema)