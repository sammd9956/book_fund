const { isAuthenticated } = require('../../middleware/auth');
const { userSignIn, getMyProfile, userSignUp } = require('../controllers/userController');

const router = require('express').Router();


router.post("/sign-up", userSignUp);
router.post("/sign-in", userSignIn);
router.get("/get-me", isAuthenticated, getMyProfile);

module.exports = router;