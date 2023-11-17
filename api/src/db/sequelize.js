const { Sequelize, DataTypes } = require('sequelize')
const BookModel = require('../models/book')
const books = require('./mock-book')

const sequelize = new Sequelize('librairie', 'root', 'crudzelis',{
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions:{
        timezone: 'Etc/GMT-2'
    },
    logging: false
})

const Book = BookModel(sequelize , DataTypes)

const initDb = ()=>{
     return sequelize.sync({ force: true }).then(_ => {
        books.map(book =>{
            Book.create({
                title_book: book.bookName,
                author_book: book.author,
                note_book: book.note
            }).then(book => console.log(book.toJSON()))
            })
        console.log('La base de données a bien été initialisée')
    })
}

module.exports = {
    initDb, Book
}