import { Router } from "express";
import { jwtVerify } from "../middleware/jwtVerify.js";

import {userDetails, userLogin, userRegister,} from '../controllers/user.controller.js'

 const userRouter = Router();

 userRouter.route('/register').post(userRegister)

 userRouter.route('/login').post(userLogin)
 
 userRouter.route('/').get(jwtVerify, userDetails)

 export default userRouter;