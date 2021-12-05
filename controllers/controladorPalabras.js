const palabra = require('../models/consultaPalabras')

module.exports.traer_frases = (req, res) => {
    palabra.find().then((respuesta)=>{
        console.log(respuesta);
        res.send(respuesta);
    }).catch((err)=>{
        console.log("error al traer palabras: "+err);
        res.status(400).json({err});
    });
}

module.exports.nueva_frase = (req, res) => {
    const {frase} = req.body;

    palabra.create({
        frase:frase,
    }).then((respuesta)=>{
        console.log("palabra agregada: ", respuesta);
        res.status(200).json(respuesta);
    }).catch((err)=>{
        console.log("error al guardar nueva palabra: " + err);
        res.status(400).json(err);
    });
}