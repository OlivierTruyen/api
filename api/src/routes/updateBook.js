const { Book} = require('../db/sequelize')

module.exports = (app) => {
    app.put('/api/books/:id' , (req, res) =>{
        const id = req.params.id
        Book.update(req.body , {
            where: { id: id }
        })
        .then(_ => {
        return Book.findByPk((id).then(book =>{
                if(book === null){
                    const message = "Le livre demandé n\'existe pas. Réessayez avec un autre identifiant"
                    return res.status(404).json({message})
                }
                const message = `Le livre ${title_book} a bien été modifié`
                res.json({ message, data: book })
            }))
        })
        .catch(error => {
            const message = 'Le livre n\'a pas pu être modifié'
            res.status(500).json({message, data:error})
        })
    })   
}