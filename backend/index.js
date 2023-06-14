import express from 'express';
import router from './routes/route.js';
import cors from 'cors'

const app = express();
app.use(cors())

app.use('/', router); 


app.listen(5000, () => {
  console.log(`Server listening on port 5000` );
});
 