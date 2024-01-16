import POOL from 'pg'
import dotenv from "dotenv-safe"
dotenv.config({ path:`.env.${process.env.NODE_ENV}`});
const {Pool} =POOL;
const pool = new Pool({
  user: 'postgres',
  password:'1234',
  host: 'localhost',
  port:8081,
  database: 'LearningNode'
});
export const db_connectfunction=()=>{
pool.connect((err:any)=>{
        if(err) throw err
        console.log("DB Connected without sequlize ");
});}

export const dbQuery=(query:any,data:any)=>{
    return new Promise((resolve,reject)=>{
      pool.query(query,data,(error:any,result:any)=>{
          if(error) reject(error)
          resolve(result);
      })
    })
  }


