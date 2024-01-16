import { dbQuery } from '@src/config/query'
import {Request,Response} from 'express'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export const authcontroller = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { user_age, user_id, user_name, user_password } = req.body;
        console.log(user_password,"as internal password")
        const checkResult : any = await dbQuery("SELECT * FROM users WHERE user_name = $1",[user_name] );  
        const {rows} = checkResult; 
        const bycrypted_password=await bcrypt.hash(user_password, 10);
        if(rows.length==0){
        const result = await dbQuery('INSERT INTO users ( user_name, user_age, user_password) VALUES ($1, $2, $3)', [user_name, user_age, bycrypted_password]);
        res.json({"message":"user registered successfully"});
        }
        else{
            res.status(400).json({"message":"user already exists"})
        }
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Internal Server Error');
    }
};
export const authlogincontroller =async (req:Request,res:Response) => {
    try{
    console.log(req.body,"as login")
    const { user_age, user_id, user_name, user_password } = req.body;
    const result : any = await dbQuery("SELECT * FROM users WHERE user_name = $1;",[user_name] );  
    const {rows} = result
    console.log(rows);
    if(rows.length !=0 &&  (await bcrypt.compare(user_password,rows[0].user_password))){
    //   console.log(await bcrypt.genSalt(10),"salt");
      const token=jwt.sign(req.body,"$2b$10$qFqTOPSjt33XZ/9HEOn4de")
      const result : any = await dbQuery("update users set token=$1 where user_name=$2",[token,user_name] );  
     return  res.send({data:{token:token}})
    }
    else if(rows.length===0){
        res.json({"message":"User Not Found"})
    }
    else{
        res.json("Credential error")
    }

    }
    catch(error){
        console.log("Error updating data",error)
        res.status(500).send("Error Logging in")
    }
}
