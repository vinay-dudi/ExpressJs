import { Request, Response } from "express";
import AWS from 'aws-sdk'; // importing aws

export const awsUpload= (req:Request, res:Response) => {
    const{bucketname}=req.body
    if(bucketname == null){
        res.send("Please a bucket name")
    }
    else{
    const bucketName = bucketname;
    const params = {
      Bucket: bucketName,
      ACL: 'private',
      
    };
    const s3 = new AWS.S3(); //AWS S3 configuration

    s3.createBucket(params, (err, data) => {
      if (err) {
        console.error('Error creating bucket:', err);
        res.status(500).send('Error creating bucket');
      } else {
        console.log(`Bucket created successfully: ${data.Location}`);
        res.status(200).send('Bucket created successfully');
      }
    });
    }
  };