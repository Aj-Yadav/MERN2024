const { Schema, model, Mongoose} = require("mongoose");

const serviceSchema = new Schema({
    service: {
        type:String,
        reqire:true
    },
    description: {
        type:String,
        reqire:true
    },
    price: {
        type:String,
        reqire:true
    },
    provider: {
        type:String,
        reqire:true
    },
})

const Service = new model("Service",serviceSchema);

module.exports = Service;
