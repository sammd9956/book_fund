import http from 'http';
import app from './src/app.js';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { runMigrations } from './src/database/migrate.js';
dotenv.config();

const PORT = process.env.PORT || 3000;

async function serverStart() {

  const pool = await connectDB();   

  await runMigrations(pool);        

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
  });

}

serverStart();