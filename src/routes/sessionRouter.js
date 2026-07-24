import { Router } from "express";
import { login, register, current, logout } from "../controllers/sessionController.js";
import { searchUser, validateToken } from "../middlewares/authMiddleware.js";

const router = Router()

router.post('/register', register)
router.post('/login', searchUser, login)
router.get('/current', validateToken, current)
router.post('/logout', logout)

export default router