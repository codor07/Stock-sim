import express from 'express';
import { addUser, getUser, userBuy, updateUserWatchList, userSell} from '../controller/userController.js';
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hello from route");
});
router.post('/register-user',addUser);
router.post('/login-user',getUser);
router.post('/buy-stock',userBuy);
router.post('/update-watchlist',updateUserWatchList);
router.post('/sell-stock',userSell);


export default router;