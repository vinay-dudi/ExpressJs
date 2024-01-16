import { Request, Response } from 'express';
import { products } from '../config/sequelize/models/Model';

export const Create = async (req: Request, res: Response) => {
  try {
    console.log(req.body, 'req');
    const { Product_id, Product_name, Product_price, Product_status } = req.body;
    const product = await products.create({
      Product_id: Product_id,
      Product_name: Product_name,
      Product_price: Product_price,
      Product_status: Product_status,
    });

    if (product) {
      res.status(200).send({ message: 'Product Successfully Created' });
    } else {
      res.status(500).send({ message: 'Error while creating product' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error while creating product' });
  }
};

