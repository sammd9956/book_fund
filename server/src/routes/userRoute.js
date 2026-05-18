import {isAuthenticated} from '../../middleware/auth.js';
import { userSignIn, getMyProfile, userSignUp } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();


router.post("/sign-up", userSignUp);
router.post("/sign-in", userSignIn);
router.get("/get-me", isAuthenticated, getMyProfile);

export default router;