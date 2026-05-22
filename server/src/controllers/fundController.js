import { pool } from "../../config/db.js";
import bcrypt from 'bcrypt';
import { TryCatch } from "../../middleware/error.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { ErrorHandler } from "../../utils/utility.js";
import { creatDonation, findDonorByEmail } from "../models/bookFunModel.js";


const crateFundForMyClass = TryCatch(async (req, res, next) => {
    const {fundType, schoolName, fundName, startDate, endDate, donorName, donorEmail, donorPassword, goalAmount, message} = req.body;
    
    if(!fundType || !schoolName || !fundName || !startDate || !endDate || !donorName || !donorEmail || !donorPassword || !goalAmount){
        return next ( new ErrorHandler ("All fields are required", 400) )
    }
    const existingDonor = await findDonorByEmail(donorEmail);
    // if(existingDonor) return next(new ErrorHandler("Donor already exist", 401))
    const hashedPass = await bcrypt.hash(donorPassword, 10);
    const [result] = await pool.query("INSERT INTO tbl_book_funds (fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, donor_password, goal_amount, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [fundType, schoolName, fundName, startDate, endDate, donorName, donorEmail, hashedPass, goalAmount, message])
    console.log("create fund");
    res.status(200).json({success:true, message: "Fund created successfully", fundBy: {id: result.insertId, fundName, donorEmail}})
})

//get all funds

const getAllFunds = TryCatch(async (req, res, next) => {

    const [allFunds] = await pool.query( `SELECT donor_id, fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, goal_amount, message, ac_flag FROM tbl_book_funds` );

    return res.status(200).json({
        success: true,
        count: allFunds.length,
        data: allFunds
    });
});

//get fun details by id
const getFundDetailsById = TryCatch(async (req, res, next) => {
console.log(req.params.f_id);

    const fund_id = req.params.f_id;
    const [allFunds] = await pool.query( `SELECT book_fund_id, fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, goal_amount, ac_flag, message FROM tbl_book_funds WHERE book_fund_id = ?`, [fund_id] );

    return res.status(200).json({
        success: true,
        count: allFunds.length,
        data: allFunds[0] || null
    });
});

//

//subdonor donations

const createDonationBySubDonor = TryCatch(async (req, res, next) => {
    const {donorId, subDonorName, subDonorEmail, amount, notes} = req.body;
    const result = await creatDonation(donorId, subDonorName, subDonorEmail, amount, notes);
    res.status(200).json({success: true, message: "ok", donationId: {donation_id: result.insertId}})
})

//se nd mail
const sendThankYouEmail = TryCatch(async (req, res, next) => {

    const { email, donorName, message, amount, bookFundID } = req.body;
    if (!email || !donorName) {
        return next(new ErrorHandler("All fields are required!", 400));
    }

    await sendEmail({
        id: bookFundID,
        to: email,
        subject: `Thank You ${donorName} ❤️`,
        html: `
          <h2>Hi ${donorName}</h2>
          <p>Thank you for donating ₹${amount || "0"}</p>
          <p>${message || "Thank you for supporting our campaign."}</p>
        `
    });

    return res.status(200).json({
        success: true,
        message: "Thank you mail sent"
    });

});

export { crateFundForMyClass, getAllFunds, getFundDetailsById, sendThankYouEmail, createDonationBySubDonor }