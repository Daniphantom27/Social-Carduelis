import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userID:{
            type: String,
            required: true,
        }, 

        Nombre:{
            type: String,
            required: true,
        }, 

        Apellido:{
            type: String,
            required: true,
        }, 
        description: String,
        imagenes: String,
        userImagenes: String,

        likes:{
            type: Map,
            of: Boolean,
        },
        comments:{
            type: Array,
            default: [],
        }, 
    },
    {timestamps: true}
)

const Post = mongoose.model("Post", postSchema);

export default Post;