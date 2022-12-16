import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
    {
        Nombre: {
            type: String,
            required: true,
            min: 2, 
            max: 50,
        },
        Apellido:{
            type: String,
            required: true,
            min: 2, 
            max: 50,
        },
        email:{
            type: String,
            required: true,
            min: 2, 
            max: 50,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            min: 7, 
        },
        imagenes:{
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
          },

    }, { timestamps: true }
)

const Usuario = mongoose.model('Usuario', UsuarioSchema);

export default Usuario;