require('dotenv').config();


const { MongoClient, ServerApiVersion } = require('mongodb');



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db('my-pic-seek-server-db');
const imageCollection = db.collection('images')

async function connectDB() {
    return client.connect()
    /*  try {
         // Connect the client to the server	(optional starting in v4.7)
         await client.connect();
         // Send a ping to confirm a successful connection
         await client.db("admin").command({ ping: 1 });
         console.log("Pinged your deployment. You successfully connected to MongoDB!");
     } finally {
         // Ensures that the client will close when you finish/error
         await client.close();
     } */
}
// connectDB().catch(console.dir); don't call it here.

module.exports = { connectDB, imageCollection };

