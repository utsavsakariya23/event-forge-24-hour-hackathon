import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'

dotenv.config();

const app = express();
await connectDB() // connect database

// Middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req,res)=>{ // in browser, localhost:3000
    res.send('API is working')
})

// Routes
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})