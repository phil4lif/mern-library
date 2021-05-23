const booksController = require('../controllers/booksController')

function apiRoutes(app) {
    app.get("/api/books", (req, res) => {
        booksController.findAll()
            .then(dbModel => {
                res.json(dbModel)
            }).catch(err => res.status(422).json(err));
    })
    app.post("/api/books", (req, res) => {
        let newbook = req.body;
        console.log(newbook)
        booksController.create(newbook)
            .then(dbModel => res.json(dbModel.data))
            .catch(err => console.log(err));

    })
    app.delete("/api/books/:id", (req, res) => {
        let id = req.params.id
        booksController.remove(id).then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
}
module.exports = apiRoutes