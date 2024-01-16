import {Request,Response} from 'express'
const prodController=(req:Request,res:Response)=>{
   console.log("abc")
   res.send("abc")
}
export default prodController;