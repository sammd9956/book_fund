

//creat fund

import { pool } from "../../config/db.js";
import { TryCatch } from "../../middleware/error.js";
import { ErrorHandler } from "../../utils/utility.js";

const crateFundForMyClass = TryCatch(async (req, res, next) => {
    const {fundType, schoolName, fundName, startDate, endDate, contactName, contactEmail, fundPassword, goalAmount, message} = req.body;
    console.log("fundType", fundType);
    console.log("schoolName", schoolName);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    console.log("contactName", contactName);
    console.log("contactEmail", contactEmail);
    console.log("fundPassword", fundPassword);
    console.log("goalAmount", goalAmount);
    console.log("message", message);
    
    if(!fundType || !schoolName || !fundName || !startDate || !endDate || !contactName || !contactEmail || !fundPassword || !goalAmount){
        return next ( new ErrorHandler ("All fields are required", 400) )
    }
    const [result] = await pool.query("INSERT INTO book_funds (fund_type, school_name, fund_name, start_date, end_date, contact_name, contact_email, fund_password, goal_amount, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [fundType, schoolName, fundName, startDate, endDate, contactName, contactEmail, fundPassword, goalAmount, message])
    console.log("create fund");
    res.status(200).json({success:true, message: "Fund created successfully", fundBy: {id: result.insertId, fundName, contactEmail}})
})

//get all funds

const getAllFunds = TryCatch(async (req, res, next) => {

    const [allFunds] = await pool.query( `SELECT id, fund_type, school_name, fund_name, start_date, end_date, contact_name, contact_email, goal_amount, message FROM book_funds` );

    return res.status(200).json({
        success: true,
        count: allFunds.length,
        data: allFunds
    });
});

export { crateFundForMyClass, getAllFunds }