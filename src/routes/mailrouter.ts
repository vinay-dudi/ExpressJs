import  { Router } from 'express'
import { sendmail } from '../controller/mail'
const mailrouter=Router()
mailrouter.post('/mail',sendmail)
export default mailrouter;