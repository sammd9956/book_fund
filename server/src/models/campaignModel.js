import { pool } from '../../config/db.js';

const findCampaignById = async(id) => {
    
    
     return await pool.query( "SELECT campaign_id, fund_name, goal_amount, message, start_date, end_date from tbl_campaign WHERE campaign_id = ?", [id] )
    .then(([rows]) => {
        return rows.length > 0 ? rows[0] : null;
    });
};

const updateCampaignById = async(fundName, goalAmount, message, startDate, endDate, id) => {
    console.log(fundName);
    console.log(goalAmount);
    console.log(message);
    console.log(startDate);
    console.log(endDate);
    console.log(id);
    
        
     const [result] = await pool.query( "UPDATE tbl_campaign SET fund_name = ?, goal_amount  = ?, message = ?, start_date = ?, end_date = ? WHERE campaign_id = ?", [fundName, goalAmount, message, startDate, endDate, id] );
     return result;
    
};

export {findCampaignById, updateCampaignById};
