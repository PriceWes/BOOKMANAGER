# Book Manager

A simple Node.js CRUD application for managing a collection of books using MongoDB.

## Features
- **Add Book**: Insert a new book into the database.
- **List Books**: Retrieve and display all books.
- **Update Book**: Modify details of an existing book by its ID.
- **Delete Book**: Remove a book from the database by its ID.

## Project Structure
```
book-manager/
├── app.js         # Main application entry point
├── book.js        # CRUD helper functions for books
├── db.js          # MongoDB connection logic
├── package.json   # Project metadata and dependencies
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

## Setup
1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd book-manager
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure MongoDB**
   - Update your MongoDB connection string in `db.js` if needed.

## Usage

All CRUD operations are available via helper functions in `book.js`. You can import and use them in `app.js` or any other script.

### Example Usage

```
const { addBook, listBooks, updateBook, deleteBook } = require('./book');

// Add a new book
node app.js add "THE BIBLE" "InspiredMen" 1445

// List all books
node app.js list

// Update a book by ID
node app.js update 'BOOK_ID' 'ATTRIBUTE TO UPDATE' "ATTRIBUTE" 
example
node app.js update 68bbdf07ab16e58a5eade5a9 author "HolyMen"

// Delete a book by ID
node app.js delete "BOOK_ID"
```

## Scripts
- `node app.js`: Start the application.

## Notes
- Ensure MongoDB is running before using the app.
- All database operations are asynchronous and return Promises.

## License
FREE_WORLD Inc
