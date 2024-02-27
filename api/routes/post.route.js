import expres from "express";
import { verifyToken } from "../utils/veryfyUser.js";
import {
  create,
  getposts,
  deletepost,
} from "../controllers/post.controller.js";

const router = expres.Router();
router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
