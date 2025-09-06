// CRUD helpers
const connectDB = require('./db');
const { ObjectId } = require('mongodb');

async function addBook(Book){
    const Books = await connectDB();
    const result = await Books.insertOne(Book);
    console.log('Book added: ', result.insertedId);
}

async function listBooks(){
    const Books = await connectDB();
    const allBooks = await Books.find().toArray();
    console.log('All Books:', allBooks);
}

async function updateBook(id, updates){
    const Books = await connectDB();
    const result = await Books.updateOne(
        {_id: new ObjectId(id)},
        {$set: updates}
    );
    console.log('Updated', result.modifiedCount);
}

async function deleteBook(id){
    const Books = await connectDB();
    const result = await Books.deleteOne(
        {_id: new ObjectId(id)},
    );
    console.log('Deleted: ', result.deletedCount);
}

module.exports = { addBook, listBooks, updateBook, deleteBook}