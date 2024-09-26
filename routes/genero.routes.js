
module.exports = app => {
    const controller = require("../controllers/genero.controller.js");
    let router = require("express").Router();

    router.get("/", controller.listGeneros);
    router.get("/:id", controller.getGenero);
    router.post("/", controller.createGenero);
    router.put("/:id", controller.updateGenero);
    router.patch("/:id", controller.updateGenero);
    router.delete("/:id", controller.deleteGenero);
    app.use('/api/generos', router);
}