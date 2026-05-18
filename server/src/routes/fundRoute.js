import express from 'express';
const router = express.Router();
import {crateFundForMyClass, getAllFunds} from '../controllers/fundController.js'

router.post("/create-fund", crateFundForMyClass);
router.get("/get-all-funds", getAllFunds);

export default router;