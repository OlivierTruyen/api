const { Book } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/books/:id', (req, res) => {
        Book.findByPk(req.params.id)
        .then(book => {
            if(book === null){
                const message = "Le livre demandé n\'existe pas. Réessayez avec un autre identifiant"
                return res.status(404).json({message})
            }
            const message = 'Un livre a bien été trouvé'
            res.json({ message , data: book})
        })
        .catch(error => {
            const message = 'Le livre n\'a pas pu être récupére'
            res.status(500).json({message, data:error})
        })
    })
}