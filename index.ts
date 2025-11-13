import express, { type Application } from 'express';
import { config } from 'dotenv';

// Load environment variables from .env file
config()

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// 
