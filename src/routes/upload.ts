import { multerUpload } from "@src/controller/multerUpload";
import { Request, Response, Router } from "express";
import multer from "multer";
const uploadrouter=Router()

const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads');
        //destinations
      },
      filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //   cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, file.originalname);
      },
    });

    const upload = multer({
        storage: storage,
        limits: {
          fileSize: 1024 * 1024 * 10,
        },
      });
      
    uploadrouter.post('/api/upload', upload.single('file'),multerUpload)
export default uploadrouter; 