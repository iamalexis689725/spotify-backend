const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importart modelos
db.artistas = require("./artista.model")(sequelize, Sequelize);
db.generos = require("./genero.model")(sequelize, Sequelize);
db.albumes = require("./album.model")(sequelize, Sequelize);
db.canciones = require("./cancion.model")(sequelize, Sequelize);
db.artistaxgenero = require("./artistaxgenero.model")(sequelize, Sequelize);
// definir relaciones
db.artistas.hasMany(db.albumes, {as: "albumes", foreignKey: "artista_id"});
db.albumes.belongsTo(db.artistas, {
    foreignKey: "artista_id",
    as: "artistas",
});
db.albumes.hasMany(db.canciones, {as: "canciones", foreignKey: "album_id"});
db.canciones.belongsTo(db.albumes, {
    foreignKey: "album_id",
    as: "albumes",
});
db.artistas.belongsToMany(db.generos, {
    through: db.artistaxgenero,
    foreignKey: "artista_id"
});
db.generos.belongsToMany(db.artistas, {
    through: db.artistaxgenero,
    foreignKey: "genero_id"
});


module.exports = db;