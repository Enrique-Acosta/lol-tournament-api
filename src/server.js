import app from "./app.js";
import { env } from "./config/env.js";
import { mongoConnection } from "./config/database.js";

app.listen(env.PORT,()=>{
    mongoConnection()
    console.log('Servidor corriendo en puerto: ', env.PORT);
    
})