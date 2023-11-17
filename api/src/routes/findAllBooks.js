const {Book} = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/books', (req, res) => {
        Book.findAll()
        .then(books => {
            const message = 'La liste des livres a bien été récupérée'
            res.json( {message, data: books})
        })
        .catch(error => {
            const message = `La listes des livres n'a pas pu être récupérée. Réessayez dans une quelque instants`
            res.status(500).json({ message, data: error})

        })
    })
}