import Post from "../models/Post.js";
import Usuario from "../models/Usuario.js";

//CREATE 
export const createPost = async(req, res)=>{
    try{
        const { userID, description, imagenes } = req.body;
        const user = await Usuario.findById(userID);
        const newPost = new Post({
            userID,
            Nombre: user.Nombre,
            Apellido: user.Apellido,
            description,
            userImagenes: user.imagenes,
            imagenes,
            likes:{},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    }catch(err){
        res.status(409).json({ message: err.message });
    }
}

//LEER
export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post);

    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const getUserPosts = async (req, res) => {
    try{
        const { userID } = req.params
        const post = await Post.find({userID});
        res.status(200).json(post);

    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

// ACTUALIZAR
export const likePost= async (req, res) => {
    try{
        const { id } = req.params;
        const { userID } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userID)

        if(isLiked) {
            post.likes.delete(userID)
        }else{
            post.likes.set(userID, true)
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        )

        res.status(200).json();

    }catch(err){
        res.status(404).json({ message: err.message });
    }
};