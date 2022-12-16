import Usuario from "../models/Usuario.js";

//LEER
export const getUsuario = async (req, res) => {
    try {
        const { id }= req.params;
        const user = await Usuario.findById(id);
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const getUserFriends = async (req, res) => {
    try{
        
    const { id }= req.params;
    const user = await Usuario.findById(id);

    const friends  = await Promise.all(
        user.friends.map((id) => user.findById(id))
    );
    const formattedFriends = friends.map(
        ({ _id, Nombre, Apellido, imagenes }) => { 
            return { _id, Nombre, Apellido, imagenes };
        }
    );
    res.status(200).json(formattedFriends);
    }catch (err){
        res.status(404).json({ message: err.message });
    }
};

//ACTUALIZAR
export const addRemoveFriends = async (req, res) => {
    try{
        const { id, friendsID } = req.params;
        const user = await Usuario.findById(id);
        const friend = await Usuario.findById(friendsID);

        if(user.friends.includes(friendsID)){
            user.friends = user.friends.filter((id) => id !== friendsID)
            friend.friends = friend.friends.filter((id) => id !== id);
        }else{
            user.friends.push(id);
        }
        await user.save();
        await friend.save();

        const friends  = await Promise.all(
            user.friends.map((id) => user.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, Nombre, Apellido, imagenes }) => { 
                return { _id, Nombre, Apellido, imagenes };
            }
        );

        res.status(200).json(formattedFriends);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}