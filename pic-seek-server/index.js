const app = require('./src/app');
const { connectDB } = require('./src/utils/connectDB');

require('dotenv').config();
const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚩Server is running at port ${port}`);
        console.log('connected to mongodb');
    })
})
    .catch((err) => {
        console.log(err);
    })


