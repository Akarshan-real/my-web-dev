import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
const port = 3000;

dotenv.config();

app.use(cors());

const key = process.env.API_KEY;

app.get('/getJsonDataItems', async (req, res) => {
    const clientKey = req.headers['x-api-key']
    if (clientKey !== key) {
        return res.status(401).json({success:"false",msg:"Invalid api key"});
    }
    let response;
    let items;
    try {
        response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok) {
            items = await response.json();
            res.send(items);
        }
        else {
            return res.status(response.status).json({ success: "failed", msg: "backend error" });
        }
    }
    catch (error) {
        console.log("Failed ", error);
        res.status(500).json({ success: "failed ", msg: "backend error" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});