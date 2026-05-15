const jwt = require('jsonwebtoken');
const { TryCatch } = require('./error');
const { ErrorHandler } = require('../utils/utility');
const { BOOK_FUND_TOKEN } = require('../constants/config');

const isAuthenticated = TryCatch( async (req, res, next) => {
const token = req.cookies[BOOK_FUND_TOKEN];
if(!token)
     return next(new ErrorHandler("Please, login to access this route", 401));
const decodedData = jwt.verify(token, process.env.JWT_SECRET);
req.user = decodedData;
next()

})

module.exports = {isAuthenticated}