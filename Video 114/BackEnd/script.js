import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config as configDotenv } from 'dotenv'
import router from './routes/todoRoutes.js';

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000

app.use("/api", router);

(async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`db connected by mongoose with atlas`) ;

    app.listen(port , () =>{
      console.log(`port running`," ",port) ;
    })
  }
  catch (error) {
    console.log('Database failed to connect'," ",error.message) ;
    process.exit(1);
  }
})();
