import { Request, Response } from "express";
import { products } from "../config/sequelize/models/Model";

export const Findall = async(req:Request,res:Response)=>{
  try{
  console.log(req,"req")
        const findall = await products.findAll();
        const dbData = findall.map((each)=>{return each.dataValues})
          res.send(dbData)
        }
        catch(error){
          console.log(error)
        }
}

