const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Top_jugadores = new Schema({
    nombre: {type:String, required:true},
    tiempo: {type:Number, required:true}
});

const top = mongoose.model("top", Top_jugadores)

module.exports = top;