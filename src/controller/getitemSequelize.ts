import { products } from "@src/config/sequelize/models/Model"
import { Request, Response } from "express";

export const Get=async(req:Request,res:Response)=>{
    try{
        console.log(req,"from get")
    const {Product_name}=req.body;

    const prod=await products.findAll({
            where:{
                Product_name:Product_name
            }
    })
    if(prod === null){
        res.send("Item Not Found")
    }
   else{ res.send({prod})
    }
    }
    catch(error){
        console.log(error)
    }
}




