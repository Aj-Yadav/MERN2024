// validate-middleware.js
const errorMiddleware = require("./middleware/error-middleware");

const validate = (schema) => async(req, res, next) => {
    try{
        const parseBody = await schema.parseAsync(req.body);
        // console.log(parseBody);
        req.body = parseBody;
        // console.log(req.body);
      next();
    } catch (err) {
        const status = 422;
        const message = 'fill the input properly';
        const extraDetails =  errorMiddleware.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        };
    //    console.error(err);
       res.json(err);
    
    };

};


module.exports = validate;

