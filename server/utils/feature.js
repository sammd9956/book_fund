const jwt = require('jsonwebtoken');
const { BOOK_FUND_TOKEN } = require('../constants/config');
require('dotenv').config()

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};
const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ id: user.user_id, name: user.name, email: user.email }, process.env.JWT_SECRET);
  return res.status(code).cookie(BOOK_FUND_TOKEN, token, cookieOptions).json({
    success: true,
    user,
    message,
  });
};

module.exports = {cookieOptions, sendToken}