
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRouter.js';
import orderRouter from './routes/OrderRoute.js';

// Load environment variables
dotenv.config();
console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);
// App config 
const app = express();
const port = process.env.PORT || 4000;

// Connect to database
connectDB();
connectCloudinary()

// Middleware 
app.use(express.json());
app.use(cors());

// API endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
    res.send("What's prafull");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});