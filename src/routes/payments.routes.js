import { Router } from "express";
import { createOrder, receiveWebhook,  } from "../controllers/payment.controller.js";

const router = Router();

router.post('/create-order', createOrder)

router.get('/success',( req,res ) => {
  res.send('payment success')
})

router.get('/failure',( req,res ) => {
  res.send('payment failure')
})

router.get('/pending',( req,res ) => {
  res.send('payment pending')
})

router.post('/webhook', receiveWebhook)

export default router;
