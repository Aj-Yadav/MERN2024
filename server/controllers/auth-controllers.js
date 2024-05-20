const home = (req, res) => {
try {
    res
    .status(200)
    .send("hello I am in the Home and I am using Controllers by authcontrollers")
} catch (error) {
    console.log(error);
    res.status(400).send("their was error with Home")
}
}

const register = (req, res) => {
    try {
        res.status(200).send("register was successfull")
    } catch (error) {
        res.status(400).send("their was error with register")
    }
}


module.exports = {home , register};