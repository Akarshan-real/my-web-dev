import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.listen(port);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Sup lil bro");
})
