import { awsUpload } from "@src/controller/awsCreateBucket";
import { objectUpload } from "@src/controller/awsFileUpload";
import { Router } from "express";
import multer from "multer";

const awsrouter=Router();
const storage = multer.memoryStorage();
const uploadAws = multer({ storage: storage });
awsrouter.post('/create-bucket',awsUpload) 
awsrouter.post('/uploadObjectToAWS', uploadAws.single('files'),objectUpload)
export default awsrouter;
