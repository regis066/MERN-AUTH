import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
connectDB();

const app = express();

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.urlencoded({extended: true})); //Alow us to send form data
app.use(cookieParser());

app.use('/api/users', userRoutes)
app.get('/', (req,res)=> res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);

app.listen(port , () => console.log(`Server running on port ${port}`));



// -**POST/api/users*** -Register a user 
// -**POST/api/users/auth*** -Authenticate a user and get a token
// -**POST/api/users/logout*** -Logout user and clear cookie
// -**GET/api/users/profile*** -Get user profile 
// -**PUT/api/users/profile***-Update profile 

