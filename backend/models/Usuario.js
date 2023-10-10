const {Schema, model} = require('mongoose');

const RoleSchema= Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    rol:{
        type:String,
        required: [true, 'El nombre es obligatorio'],
        default: 'Usuario regular'
    },
    email:{
        type:String,
        required:[true, 'El email es obligatorio']
    },
    contraseña:{
        type:String,
        required:[true, 'La contraseña es obligatoria']
    },
    foto:{
        type:String,
        equired:[true,'La foto es obligatoria']
    },
    estado :{
        type:Boolean,
        default: true
    }
})

const Role = model('Role',RoleSchema);

module.exports = Role;