import express from 'express';
import { addUser, getUser } from '../controller/userController.js';
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hello from route");
})
router.post('/register-user',addUser);
router.post('/login-user',getUser);

export default router;