import { pool } from '../../config/db.js';

const findByIdAndUpdate = async(id) => {
    
    const [result] = await pool.query( "UPDATE tbl_book_funds set ac_flag = '1' WHERE book_fund_id = ?", [id] )

    return result.affectedRows > 0;
};

const findDonorByEmail = async (email) => {

    const [result] = await pool.query(
        "SELECT donor_id, fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, donor_password FROM tbl_book_funds WHERE donor_email = ?",
        [email]
    );

    return result;
};

const creatDonation = async (donorId, subDonorName, subDonorEmail, amount, notes) => {
    console.log("donorId", donorId);
    console.log("subDonorName", subDonorName);
    console.log("subDonorEmail", subDonorEmail);
    console.log("amount", amount);
    console.log("notes", notes);
    

    const [result] = await pool.query(
        "INSERT INTO tbl_sub_donor (donor_id, sub_donor_name, sub_donor_email, amount, notes) VALUES (?, ?, ?, ?, ?)",
        [donorId, subDonorName, subDonorEmail, amount, notes]
    );

    return result;
};



export {findByIdAndUpdate, findDonorByEmail, creatDonation};