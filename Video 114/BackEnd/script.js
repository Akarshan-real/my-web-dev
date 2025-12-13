// script.js
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/todoRoutes.js';

config();

const app = express();

app.use(cors());
app.set('view engine','ejs');
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
  res.render('index');
});

app.use("/api", router);



(async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`db connected by mongoose with atlas`);

    app.listen(port, () => {
      console.log(`port running`," ", port);
    });
  }
  catch (error) {
    console.log('Database failed to connect'," ", error.message);
    process.exit(1);
  }
})();
