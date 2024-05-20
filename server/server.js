const express = require("express");
const app = express();




 


app.get("/",(req, resp) => {
    resp.status(200).send("welcome to homepage of the server ");
});

app.get("/register",(req, resp) => {
    resp
    .status(200)
    .send("welcome to register page on server")
})

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running at :${PORT}`)

})

