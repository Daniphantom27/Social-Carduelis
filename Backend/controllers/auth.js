import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js'

//REGISTRO USUARIOS
export const registro = async(req, res) =>{
    try{
        const {
            Nombre,
            Apellido,
            email,
            password,
            imagenes,
        } = req.body;

        const salt  = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUsuario = new Usuario({
            Nombre,
            Apellido,
            email,
            password: passwordHash,
            imagenes,
        })
        const savedUsuario = await newUsuario.save()
        res.status(201).json(savedUsuario);
    }catch (err){
        res.status(500).json({error: err.message});

    }
}

//LOGIN
export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await Usuario.findOne({ email: email })
        if (!user) return res.status(400).json({ msg: "El usuario no existe. " });

        const isMatch = await bycript.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: "Credenciales invalidas. "})

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};
