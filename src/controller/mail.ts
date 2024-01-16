import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const sendmail = async (req: Request, res: Response) => {
  const {tomail}=req.body
    try{
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vinay.dudi@divami.com',
      pass: 'Avinash@10',
    },
  });

  const info = await transporter.sendMail({
    from: 'vinay.dudi@divami.com',
    to: tomail,
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
  });
  res.send(info)
}
catch(err){
    console.log(err);
    res.send(err)
}
};
