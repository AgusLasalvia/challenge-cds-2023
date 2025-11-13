import express, { type Application } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

// import routes
import userRoutes from './routes/user.routes';

// Load environment variables from .env file
config()
//env variables
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/challenge-cds';
const port = process.env.PORT || 3000;

const app: Application = express();


// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
