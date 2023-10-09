const {Schema, model} = require('mongoose');

const IndicadoresSchema= Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    }
})

const Indicadores = model('Role',IndicadoresSchema);

module.exports = Indicadores;