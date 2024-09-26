module.exports = (sequelize, Sequelize) => {
    const Artista = sequelize.define("artista", {
        nombre: {
            type: Sequelize.STRING,
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    })
    return Artista;
}