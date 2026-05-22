import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from '../../config/db.js';

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const runMigrations = async (pool) => {
  try {

    const migrationPath = path.join(__dirname, 'migrations');

    const files = fs.readdirSync(migrationPath);

    for (const file of files) {

      const sql = fs.readFileSync(
        path.join(migrationPath, file),
        'utf8'
      );

      await pool.query(sql); 

      console.log(`${file} migrated`);
    }

  } catch (err) {
    console.log("Migration Error:", err);
  }
};