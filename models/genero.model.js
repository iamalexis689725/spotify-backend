module.exports = (sequelize, Sequelize) => {
    const Genero = sequelize.define("genero", {
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
    return Genero;
}
