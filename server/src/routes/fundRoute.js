import express from 'express';
const router = express.Router();
import {crateFundForMyClass, createDonationBySubDonor, getAllFunds, getFundDetailsById, sendThankYouEmail} from '../controllers/fundController.js';

router.post("/create-fund", crateFundForMyClass);
router.post("/make-donation", createDonationBySubDonor);
router.post("/send-email", sendThankYouEmail);
router.get("/get-all-funds", getAllFunds);
router.get("/get-fund-details/:f_id", getFundDetailsById);

export default router;