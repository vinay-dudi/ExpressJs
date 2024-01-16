import { Sequelize } from "sequelize";
import { testConnection } from "./authenticate";

export const sequelize = new Sequelize('LearningNode', 'postgres', '1234', {
  host: 'localhost',
  port: 8081, // if we mention it while creating we have to add it; else, it takes the default port
  dialect: 'postgres'
});

testConnection();
