import { Request, Response } from "express";

export const multerUpload=(req:Request,res:Response)=>{
    if(!req.file){
        res.status(400).send("There is some issue eith your file")
    }
    else{
    res.json({"message":"fileuploaded Sucessfully","file properties":req.file})
    }
}