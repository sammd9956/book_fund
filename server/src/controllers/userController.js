import {TryCatch} from '../../middleware/error.js';
import { sendToken } from '../../utils/feature.js';
import { ErrorHandler } from '../../utils/utility.js';
import {findUserByEmail} from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from '../../config/db.js';


// signup 
const userSignUp = TryCatch( async (req, res, next) => {
    const {name, email, password} = req.body;
    
    if(!name || !email || !password) {
        return next(new ErrorHandler("All fields are required", 400))
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const [result] = await pool.query("INSERT INTO users (user_name, user_email, password) VALUES (?, ?, ?)",[name, email, hashedPass]);

    return res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: {
            id: result.insertId,
            name,
            email
        }
    })

}) 

//sign-in
const userSignIn = TryCatch(async (req, res, next) => {
    const { email, password } = req.body;

    console.log("email",email);
    console.log("pass",password);
    
    
    if (!email) {
        return next(new ErrorHandler("Email is required", 400));
    }
        
     const existingUser = await findUserByEmail(email);
     console.log(existingUser);
     
    if (!existingUser) {
        return next(new ErrorHandler("Invalid User", 401));
    }
    
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if(!isMatch) {
        return next (new ErrorHandler ("Invalid user or password", 404))
    }
   
    sendToken(res, existingUser, 200, `Welcome Back ${existingUser.user_name.toUpperCase()}`)
   
});

//get my profile
const getMyProfile = TryCatch( async (req, res, next) => {
   
    
    const user = await User.findUserByEmail(req.user.email);
    if(!user) return next(new ErrorHandler ("User not found", 400));
    res.status(200).json({success: true, user})

})
export { userSignUp, userSignIn, getMyProfile };