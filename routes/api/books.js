const router = require("express").Router();
const booksController = require("../../controllers/booksController");




// * `/api/books` (get) - Should return all saved books as JSON.
router.route("/api/books")
    .get(booksController.findAll)
    
// * `/api/books` (post) - Will be used to save a new book to the database.
router.route("/api/books")
    .post(booksController.create)

// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
router.route("/api/books/:id")
    .delete(booksController.remove)
// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });