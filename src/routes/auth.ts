import  { Router } from 'express';
import { authcontroller } from '@src/controller/authcontroller';
import { authlogincontroller } from '@src/controller/authcontroller';
const authrouter = Router();

authrouter.post('/register', authcontroller);
authrouter.post('/login', authlogincontroller);
export default authrouter;
