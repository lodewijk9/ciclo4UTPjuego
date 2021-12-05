const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const palabras = new Schema({
    frase: {type:String, required:true}
});

const palabra = mongoose.model("palabra", palabras)

module.exports = palabra;