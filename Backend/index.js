import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// database connection
mongoose.listen('StrictQuery', false)
const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser : true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB database is connected')
    
  } catch (error) {
    console.log('MongoDB database is connection failed')
    
  }
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth' , authRoute) 
// domain/api/v1/auth/register



// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Medicare Booking App API');
});

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
