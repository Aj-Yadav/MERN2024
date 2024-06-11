const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "Error from Backend";
  
    const error = {
        status,
        message,
        extraDetails,
      };
      // console.log("I am from error-middleware",error)
    return res.status(status).json(error);
  };
  
  module.exports = errorMiddleware;