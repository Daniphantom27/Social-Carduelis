import express from 'express';
import{
    getUsuario,
    getUserFriends,
    addRemoveFriends,
} from "../controllers/users.js"
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/:id',verifyToken, getUsuario );
router.get("/:id/friends", verifyToken, getUserFriends);


//ACTUALIZAR 
router.patch("/:id/:friendID", verifyToken, addRemoveFriends);

export default router;