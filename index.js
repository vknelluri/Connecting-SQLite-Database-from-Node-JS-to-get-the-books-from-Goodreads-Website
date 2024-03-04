const express = require("express");
const path = require("path")
const {open} = require("sqlite")
const sqlite3 = require("sqlite3")
const app = express();

const dbPath = path.join(__dirname, "goodreads.db")

let db = null;
const initializeDBAndServer = async () => {
    try {
    db = await open  ( {
            filename: dpPath,
            driver: sqlite3.Database
        });
        ap.listen (3000, () => {
            console.log("server is running at "http://localhost:3000/");
        });
} catch(e) {
    console.log(`DB Error:${e.message}`);
    process.exit(1);
}
};
initializeDBAndServer();

app.get("/books/", async (request, response) => {
  const booksQuery = `
    SELECT * FROM book 
    ORDER BY book_id;`;
  const booksArray = await db.all(booksQuery);
  response.send(booksArray);
});
