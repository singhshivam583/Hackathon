import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

const app = express()

app.use(express.json());
app.use(cors({
    origin:['http://localhost:7000'], 
    credentials: true,
}));
app.use(cookieParser());


app.use("/api/v1/user", userRouter)
app.use("/api/v1/products", productRouter)

app.get('/health', (req, res) => {
    return res.json("Everything is OK")
})

export {app}