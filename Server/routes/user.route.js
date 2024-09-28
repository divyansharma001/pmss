import express from 'express';
import isAuthenticated from '../middlewares/auth.middleware';
import { signup } from '../controllers/user.controller';

const router = express.Router();

router.route('/signup').post(signup);

export default router;