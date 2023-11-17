const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    const Book = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title_book: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_book: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note_book: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_modify: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, { 
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
    });

    return Book;
};