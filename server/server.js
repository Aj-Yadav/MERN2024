const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth",router);


//! to keep everything simple I am using auth-router  
// app.get("/",(req, resp) => {
//     resp.status(200).send("welcome to homepage of the server ");
// });

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running at :${PORT}`)

})

