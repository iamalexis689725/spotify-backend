module.exports = (sequelize, Sequelize) => {
    const ArtistaGenero = sequelize.define('artistagenero', {
        nombre: {
            type: Sequelize.STRING,
        },
        genero_id: {
            type: Sequelize.INTEGER
        },
        artista_id: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true
    });
    return ArtistaGenero;
};
