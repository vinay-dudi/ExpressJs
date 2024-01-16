import { products } from "@src/config/sequelize/models/Model";
import { Request, Response } from "express";

export const Delete = async (req: Request, res: Response) => {
  try {
    const { Product_id } = req.body;
    const existingProduct = await products.findOne({
      where: {
        Product_id: Product_id
      }
    });

    if (!existingProduct) {
      return res.status(404).send({"message": "No such item to delete"});
    }

    await products.destroy({
      where: {
        Product_id: Product_id
      }
    });

    res.send({
      "message": "Deleted item"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({"message": "Internal Server Error"});
  }
};
