import { pool } from '../../config/db.js';

const findUserByEmail = (email) => {
    
    return pool.query( "SELECT donor_id, fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, goal_amount, message FROM tbl_book_funds WHERE donor_email = ?", [email] )
    .then(([rows]) => {
        return rows.length > 0 ? rows[0] : null;
    });
};
const getProfileById = (id) => {
    console.log("xxxxxx", id);
    
    return pool.query( "SELECT donor_id, fund_type, school_name, fund_name, start_date, end_date, donor_name, donor_email, goal_amount, message FROM tbl_book_funds WHERE donor_id = ?", [id] )
    .then(([rows]) => {
        return rows.length > 0 ? rows[0] : null;
    });
};

export {findUserByEmail, getProfileById};