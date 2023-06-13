import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectToDatabase from './db.js';
import router from './routes/route.js';
import cors from 'cors'
const url = process.env.DB_URL;
const port = process.env.PORT;

connectToDatabase(url);

const app = express();
app.use(cors())

app.use('/', router); 


app.listen(port, () => {
  console.log(`Server listening on port ${port}` );
});
 