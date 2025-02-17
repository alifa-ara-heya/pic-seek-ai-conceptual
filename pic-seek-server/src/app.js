
//definition
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const getImageBuffer = require('./utils/ai/getImageBuffer');
const generateImageUrl = require('./utils/ai/generateImageURL');

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

        //1. create a final prompt
        //2. generate image buffer
        const buffer = await getImageBuffer(prompt, category)

        //3. upload image and get url
        const data = await generateImageUrl(buffer, prompt);
        res.send(data)

        return;
    }
    res.send({})



    //4. insert data in mongodb
    //5. send response

})


app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Server is running.'
    })
})

//common js export system
module.exports = app;