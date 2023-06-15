import jwt from 'jsonwebtoken';

const generateToken = (res,userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    });
    
const expiredate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    res.cookie('jwt',token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: expiredate,
    })
}
export default generateToken;