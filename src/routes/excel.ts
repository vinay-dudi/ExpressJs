import { excel } from "@src/controller/excelcontroller";
import {Request,Response, Router} from "express";
import multer from "multer";
const excelRouter=Router();
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
    
excelRouter.post('/exceltojson', upload.single('file'),excel)
export default excelRouter;
