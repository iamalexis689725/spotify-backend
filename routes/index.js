module.exports = app => {
    require("./artista.routes")(app);
    require("./genero.routes")(app);
}