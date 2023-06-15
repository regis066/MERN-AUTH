import  express  from "express";
import { authUser,registerUser,getUserProfile,updateUserProfile,logoutUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post('/',registerUser)
router.post('/auth', authUser);
router.post('/logout',logoutUser);
router
.route('/profile')
.get(protect, getUserProfile)
.patch(protect, updateUserProfile);


export default router;