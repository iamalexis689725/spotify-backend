const db = require("../models");
const { checkRequiredFields } = require("../utils/request.utils");

exports.listArtistas = async (req, res) => {
    const artistas = await db.artistas.findAll();
    res.send(artistas);
}

exports.getArtista = async (req, res) => {
    const id = req.params.id;
    const artistas = await db.artistas.findByPk(id);
    if (!artistas) {
        res.status(404).send({ message: `artista no encontrado`});
        return;
    }
    res.send(artistas);
}

exports.createArtista = async (req, res) => {
    const requiredFields = ["nombre"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if ( fieldsWithErrors.length > 0 ){
        res.status(400).send({ message: `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}` });
        return;
    }
    const artistas = await db.artistas.create(req.body);
    res.send(artistas);
}
exports.deleteArtista = async (req, res) => {
    const id = req.params.id;
    const artistas = await db.artistas.findByPk(id);
    if (!artistas){
        res.status(404).send({ message: "artistas no encontrada"});
        return;
    }
    await artistas.destroy();
    res.send({ message: "artista eliminado correctamente" });
}

exports.updateArtista = async (req,res) => {
    const id = req.params.id;
    const artistas = await db.artistas.findByPk(id);
    if (!artistas){
        res.status(404).send({ message: "artista no encontrado"});
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
    await artistas.update(req.body);
    res.send(artistas);
}

