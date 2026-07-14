import mongoose from "mongoose";
import { env } from "./env.js";

export async function mongoConnection() {
    await mongoose.connect(env.MONGO_URL)
    console.log('Se ha conectado a la base de datos correctamente');
    
}