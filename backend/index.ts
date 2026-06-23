import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/data/api', (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`app server working on http://10.0.2.2:${PORT}`)
})