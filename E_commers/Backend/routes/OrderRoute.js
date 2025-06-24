import express from 'express'
import { placeOrder,placeOrderStrpe,placeOrderRazerpay,allOrders,userOrders,updateStauts } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

//Admin Features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStauts);

//Payment Featres
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStrpe)
orderRouter.post('/razorpay',authUser,placeOrderRazerpay)

//User Feature 
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter