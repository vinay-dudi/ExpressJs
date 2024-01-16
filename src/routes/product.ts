import { Create } from '@src/controller/createSequelize';
import { Delete } from '@src/controller/deleteSequqelize';
import { Findall } from '@src/controller/findallSequelize';
import { Get } from '@src/controller/getitemSequelize';
import { Update } from '@src/controller/updateSequellize';
import {Router} from 'express'
const productRouter=Router()
productRouter.post('/CreateProduct',Create)
productRouter.post('/getItem',Get)
productRouter.post('/UpdateProduct',Update)
productRouter.get('/getall',Findall)
productRouter.post('/deleteItem',Delete)
export default productRouter;