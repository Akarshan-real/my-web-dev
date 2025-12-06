import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config as configDotenv } from 'dotenv'
import todoRoutes from './routes/todoRoutes.js';

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000

app.use("/api/todos",todoRoutes);

(async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`db connected`) ;

    app.listen(port , () =>{
      console.log(`port running`) ;
    })
  }
  catch (err) {
    console.log(err, ` error`) ;
    process.exit(1);
  }
})();
