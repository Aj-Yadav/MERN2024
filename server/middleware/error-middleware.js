// error-middleware.js
const errorMiddleware = (err, req, res, next) => {
    
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from Backend";
    
    const errors = {
        status,
        message,
        extraDetails
    };

    // console.log(type(error));
   return res.status(status).json(errors);

};

module.exports = errorMiddleware;
