const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const misRutas = require('./routes/api');
const cors = require('cors');
const morgan = require('morgan');


dotenv.config();

const app = express();
// Levantar server
app.listen(process.env.PORT, () =>{
    console.log("listening en puerto " + process.env.PORT);
});

mongoose.connect(
    "mongodb+srv://user_1:"+process.env.DB_PASSWORD+"@ahorcados.hjq52.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority"
).then(()=>{
    console.log('___conectado a Mongo___');
}).catch((err)=>{
    console.log("Error al conectar a mongo "+err)
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());// permite definir quien (IP) puede hacer peticiones, de momento cualquiera puede
app.use("/api", misRutas);



