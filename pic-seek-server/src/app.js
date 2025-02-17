
//definition
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');

//middleware
app.use(cors())
app.use(express.json())
app.use(logger);



//playground
app.post('/create-image', async (req, res) => {
    const { email, prompt, username, userImg, category } = req.body;

    if (!email || !prompt || !username || !userImg || !category) {
        res.status(400).send({
            status: 400,
            message: "Please provide email, prompt, username, userImg,  category",
        })
        return;
    }
    res.send({})
})


app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Server is running.'
    })
})

//common js export system
module.exports = app;