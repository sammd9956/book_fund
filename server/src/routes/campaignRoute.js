import express from 'express';
import { createNewCompaign, getCampaignById, updateCampaign } from '../controllers/campaignController.js';
const router = express.Router();


router.post("/new-campaign", createNewCompaign);
router.post("/update-campaign", updateCampaign);
router.get("/get-campaign-by-id/:id", getCampaignById);


export default router;