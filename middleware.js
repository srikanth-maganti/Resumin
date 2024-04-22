const {resumeschema}=require("./schema.js");
const ExpressError=require("./utils/ExpressError.js");

module.exports.validateSchema=(res,req,next)=>{
    console.log("hello");
    let {error}=resumeschema.validate(req.body);
    if(error)
    {
        let errs=error.details.map((er)=>er.message).join(",");
        throw new ExpressError(400,errs);
    }
    else{
       
        next();
       
    }
}

