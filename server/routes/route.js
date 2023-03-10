import express from "express";

import { addUser, getUsers, editUser, getUser, deleteUser } from "../controller/user-controller.js";

const router = express.Router();

router.post('/add-user', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;