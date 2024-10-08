module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
        nombre: {
            type: Sequelize.STRING,
        },
        artista_id: {
            type: Sequelize.INTEGER
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    }, {
        freezeTableName: true
    })
    return Album;
}