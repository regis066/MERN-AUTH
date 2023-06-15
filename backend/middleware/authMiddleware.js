import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/UseModel.js';


//YOU HAVE TO BE LOGGED IN IN ORDER TO ACCESSANY SPECIFIC ROUTES(ROUTER PROTECTION) 

const protect = asyncHandler(async(req ,res ,next)=>{
    let token;
    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');
            next();
            
        } catch (error) {
           throw new Error('Not authorized , invalid token') 
        }

    }else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }

})

export { protect };