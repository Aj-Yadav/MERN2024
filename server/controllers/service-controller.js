const Service= require("../models/Service-model");

const services = async(req , res) => {
    try {
        const response = await Service.find();
        if(!response){
            res.status(404).json({msg:"no service found" });
            return;
        }
        return res.status(200).json({msg:response})
    } catch (error) {
        console.log("error service-controller",error)
         }
}

module.exports = services;