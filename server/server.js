require("dotenv").config();
const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const adminRoute = require("./router/admin-router");

const url = require('url');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, './.env') });

const BASE_URL = process.env.BASE_URL;
if (!BASE_URL) {
  console.error('Error: BASE_URL is not defined in the environment variables.');
  process.exit(1);
}
const parsedUrl = url.parse(BASE_URL);
const basePath = parsedUrl.path;

const corsoptions = {
    origin:`*`,
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsoptions));
app.use(express.json());

app.use(`${basePath}api/auth`,authRoute);
app.use(`${basePath}api/form`,contactRoute);
app.use(`${basePath}api/data`,serviceRoute);
app.use(`${basePath}api/admin`, adminRoute)

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000
try {
    connectDb().then(()=>{
        app.listen(PORT,() => {
            console.log(`server is running at :${PORT}`);
        });
    });
} catch (error) {
    console.log("server",error);
}


