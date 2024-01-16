import { Request,Response, json } from "express";
import exceltojson from 'convert-excel-to-json';
export const excel = (req: Request, res: Response) => {
  try {
    if (req.file == null) {
      res.status(400).send('No file is uploaded');
    } else {
      const filepath = 'uploads/' + req.file.filename;
      const excelData = exceltojson({
        sourceFile: filepath,
        header: {
          rows: 1,
        },
        columnToKey: {
          // "*":"{{columnHeader}}"
          A: 'name',
          B: '{{B1}}',
        },
      });
      res.status(200).json(excelData);
    }
  } catch (error) {
    res.status(500);
  }
};
