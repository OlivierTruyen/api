const { Book } = require('../db/sequelize')

module.exports = (app) => {
    app.delete('/api/books/:id' , (req, res) => {
        Book.findByPk(req.params.id).then(book => {
            if(book === null){
                const message = "Le livre demandé n\'existe pas. Réessayez avec un autre identifiant"
                return res.status(404).json({message})
            }
            
            const bookDelete = book;
            return Book.destroy({
                where: { id: book.id }
            })
            .then(_ => {
                const message = `Le livre avec l'identifiant numero ${bookDelete.id} a bien été supprimé`
                res.json = ({ message ,  data: bookDelete})
            })
        .catch(error => {
            const message = `La listes des livres n'a pas pu être supprimé. Réessayez dans une quelque instants`
            res.status(500).json({ message, data: error})
        })

        })
    })
}