import { Request, Response } from "express";
import { products } from "../config/sequelize/models/Model";

export const Update = async(req: Request, res: Response) => {
  try {
    const { Product_id, updated_id, updated_name, updated_price, updated_status } = req.body;

    const existingProduct = await products.findOne({
      where: {
        Product_id: Product_id
      }
    });

    if (!existingProduct) {
      return res.status(404).send({"message": "No item to update"});
    }

    await products.update(
      {
        Product_name: updated_name,
        Product_price: updated_price,
        Product_status: updated_status
      },
      {
        where: {
          Product_id: Product_id
        }
      }
    );

    res.send({"message": "Successfully edited the product"});
  } catch (error) {
    console.log(error);
    res.status(500).send({"message": "Internal Server Error"});
  }
};
