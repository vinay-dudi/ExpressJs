export const logger = (req,res,next) =>{
    console.log(req.url, Date.now())
    next();
}