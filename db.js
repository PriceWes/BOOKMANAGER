const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectDB(){
    await client.connect();
    return client.db('Bookstore').collection('Books');
}

module.exports = connectDB;