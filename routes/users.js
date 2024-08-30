import express from "express";

import {getAllUsers,getAUser, createUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);

router.get("/:id", getAUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
