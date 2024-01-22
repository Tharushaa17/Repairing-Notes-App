import express from 'express';
import { createUsers, deleteUsers, getAllUsers, updateUsers } from '../controller/userController.js';
const router = express.Router();

router.route('/').post(createUsers).get(getAllUsers).patch(updateUsers).delete(deleteUsers);

export default router;