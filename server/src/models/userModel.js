import { pool } from '../../config/db.js';

const findUserByEmail = (email) => {
    
    return pool.query( "SELECT * FROM users WHERE user_email = ?", [email] )
    .then(([rows]) => {
        return rows.length > 0 ? rows[0] : null;
    });
};

export {findUserByEmail};