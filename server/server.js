// Server.js 
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json());






app.use("/api/auth",router);

app.use(errorMiddleware);
const PORT = 5000;
try {
    
    connectDb().then(()=>{
    
        app.listen(PORT,() => {
            console.log(`server is running at :${PORT}`);
        
        });
    });
} catch (error) {
    console.log("server",error);
}


