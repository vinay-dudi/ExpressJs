import jwt from 'jsonwebtoken'
const verification=(req:any,res:any,next:any)=>{
const token:any=req.headers.authorization?.split(' ')[1];
console.log(req.headers)
jwt.verify(token,"$2b$10$qFqTOPSjt33XZ/9HEOn4de",(err:any,decoded:any)=>{
    console.log(decoded,"decoded information")
if(err){
    res.status(403).send("unauthorised");
}
else{
    if(decoded.user_name===req.headers.user_name){
        console.log("implemented next")
        next()
    }
}
})
}
export default verification;