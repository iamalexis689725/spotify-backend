const db = require("../models");
const { checkRequiredFields } = require("../utils/request.utils");

exports.listGeneros = async (req, res) => {
    const generos = await db.generos.findAll();
    res.send(generos);
}

exports.getGenero = async (req, res) => {
    const id = req.params.id;
    const generos = await db.generos.findByPk(id);
    if (!generos) {
        res.status(404).send({ message: `genero no encontrado`});
        return;
    }
    res.send(generos);
}

exports.createGenero = async (req, res) => {
    const requiredFields = ["nombre"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if ( fieldsWithErrors.length > 0 ){
        res.status(400).send({ message: `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}` });
        return;
    }
    const generos = await db.generos.create(req.body);
    res.send(generos);
}
exports.deleteGenero = async (req, res) => {
    const id = req.params.id;
    const generos = await db.generos.findByPk(id);
    if (!generos){
        res.status(404).send({ message: "genero no encontrada"});
        return;
    }
    await generos.destroy();
    res.send({ message: "genero eliminado correctamente" });
}

exports.updateGenero = async (req,res) => {
    const id = req.params.id;
    const generos = await db.generos.findByPk(id);
    if (!generos){
        res.status(404).send({ message: "genero no encontrado"});
        return;
    }
    if (req.method ==="PUT"){
        const requiredFields = ["nombre"];
        const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
        if (fieldsWithErrors.length > 0){
            res.status(400).send({ message : `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`});
            return;
        }
    }
    await generos.update(req.body);
    res.send(generos);
}

