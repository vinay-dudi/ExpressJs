import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Request,Response } from "express";

export const objectUpload=async(req:Request,res:Response)=>{

const BUCKET_NAME = 'sravyathebestintheword';
const YOUR_S3_BUCKET_REGION = 'us-east-1';
const client = new S3Client({ region: YOUR_S3_BUCKET_REGION });
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }
    const { originalname, buffer } = req.file;
    const timestamp = Date.now();
    const key = `uploads/${timestamp}_${originalname}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
    });

    const getObjectCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });
    const url = await getSignedUrl(client, getObjectCommand, { expiresIn: 120 });
    await client.send(command);
    res.json({ message: 'File Uploaded', url });
  } 
  catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
};

