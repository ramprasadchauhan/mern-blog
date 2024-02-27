import expres from "express";
import { verifyToken } from "../utils/veryfyUser.js";
import { create } from "../controllers/post.controller.js";

const router = expres.Router();
router.post("/create", verifyToken, create);

export default router;
