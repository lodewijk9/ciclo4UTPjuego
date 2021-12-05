const top_users = require("../models/consultas")

module.exports.top_jugadores = (req, res) => {
    top_users.find().sort({tiempo:1}).then((respuesta)=>{
        console.log(respuesta);
        res.send(respuesta);
    }).catch((err)=>{
        console.log("error al traer top: "+err);
        res.status(400).json({err});
    });
}

module.exports.nuevo_jugador = (req, res) => {
    const {nombre, tiempo} = req.body;
    top_users.create({
        nombre:nombre,
        tiempo:tiempo
    }).then((respuesta)=>{
        console.log("Tiempo agregado: ", respuesta);
        res.status(200).json(respuesta);
    }).catch((err)=>{
        console.log("error al guardar nuevo tiempo: " + err);
        res.status(400).json(err);
    });
}