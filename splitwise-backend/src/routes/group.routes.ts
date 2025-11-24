import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import {
  createGroup,
  getMyGroups,
  getGroupDetails,
  addMember,
  removeMember,
  updateGroupName,
  deleteGroup,
  searchGroups,
} from "../controllers/group.controller";

const groupRouter = express.Router();

groupRouter.post("/", authMiddleware, createGroup);
groupRouter.get("/", authMiddleware, getMyGroups);
groupRouter.get("/:groupId", authMiddleware, getGroupDetails);
groupRouter.post("/:groupId/members", authMiddleware, addMember);
groupRouter.delete("/:groupId/members/:memberId", authMiddleware, removeMember);
groupRouter.put("/:groupId", authMiddleware, updateGroupName);
groupRouter.delete("/:groupId", authMiddleware, deleteGroup);
groupRouter.get("/search/query", authMiddleware, searchGroups);

export default groupRouter;
