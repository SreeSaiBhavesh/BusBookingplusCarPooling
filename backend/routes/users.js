import express from 'express'
import {getUser, getAllUsers} from '../controllers/users.js'
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//for logins
// router.get("/checkauth", verifyToken, (req,res,next) => {
//     res.send('You are Logged In!')
// });


//for login and you can delete your account
// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send('You are Logged In and You can delete your account')
// });


//to get user by id
router.get('/:id',verifyUser, getUser);


// To get all users -> for admin section, only admin can see all users 
router.get('/', isAdmin, getAllUsers);

export default router;