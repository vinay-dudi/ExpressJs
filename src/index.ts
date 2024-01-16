import dotenv from 'dotenv-safe';
import express from 'express';
import authrouter from './routes/auth';
import { db_connectfunction } from './config/query';
import { logger } from './middleware/logger';
import productRouter from './routes/product';
import verification from './middleware/tokenVerification';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import { sequelize } from './config/sequelize/sequlize';
import mailrouter from './routes/mailrouter';
import uploadrouter from './routes/upload';
import awsrouter from './routes/aws';
import excelRouter from './routes/excel';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


const PORT = process.env.port;

app.use(express.json({ limit: '50mb' }));
app.use(logger);

app.use('/', uploadrouter);
app.use('/',awsrouter)
app.use('/',excelRouter)
app.use('/user', authrouter);
app.use('/', mailrouter);
app.use(verification);
app.use('/product', productRouter);
app.listen(PORT, () => {
  console.log('listening at port no:', PORT);
  db_connectfunction();
  sequelize;
});
