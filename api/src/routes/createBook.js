const { Book } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/api/books', (req, res) => {
        Book.create(req.body)
        .then(book => {
            const message = `Le livre ${req.body.title_book} a bien été crée.`
            res.json({ message, data:book})
        })
        .catch(error => {
            const message = 'Le livre n\'a pas pu être ajouté'
            res.status(500).json({message, data:error})
        })
    })
}