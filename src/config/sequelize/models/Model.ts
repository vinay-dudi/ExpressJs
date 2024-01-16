import { DataTypes } from "sequelize";
import {sequelize} from "../sequlize"


export let products = sequelize.define("products", {
    Product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  
    Product_name: {
      type: DataTypes.STRING,
    },
    
    Product_price: {
      type: DataTypes.INTEGER,
    },
  
    Product_status: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps:false //to remove default rows "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
  }
  );
  products.sync().then(() => {
    console.log("Product Model synced");
  });




