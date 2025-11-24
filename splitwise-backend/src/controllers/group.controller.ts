import { Request, Response } from "express";
import Group from "../models/Group";
import User from "../models/User";
import { AuthRequest } from "../middlewares/auth.middleware";

// ------------------- CREATE GROUP -------------------
export const createGroup = async (req: AuthRequest, res: Response) => {
  try {
    const { name, members } = req.body;

    if (!name) return res.status(400).json({ msg: "Group name is required" });

    const user = await User.findById(req.userId);

    const groupMembers = [
      {
        userId: user?._id,
        name: user?.name,
        email: user?.email,
      },
      ...(members || []),
    ];

    const group = await Group.create({
      name,
      createdBy: req.userId,
      members: groupMembers,
    });

    res.json(group);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
export const getMyGroups = async (req: AuthRequest, res: Response) => {
  try {
    const groups = await Group.find({
      "members.userId": req.userId,
    }).sort({ updatedAt: -1 });

    res.json(groups);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
export const getGroupDetails = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) return res.status(404).json({ msg: "Group not found" });

    res.json(group);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

export const addMember = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId } = req.params;
    const { name, email, userId } = req.body;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ msg: "Group not found" });

    // Check if already exists
    const exists = group.members.find((m) => m.email === email);
    if (exists) return res.status(400).json({ msg: "Already a member" });

    group.members.push({ name, email, userId });
    await group.save();

    res.json(group);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
export const removeMember = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId, memberId } = req.params;

    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ msg: "Group not found" });

    const member = group.members.id(memberId);
    if (!member) return res.status(404).json({ msg: "Member not found" });

    member.deleteOne(); // <-- THIS IS CORRECT for subdocs
    await group.save();

    res.json(group);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateGroupName = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId } = req.params;
    const { name } = req.body;

    const group = await Group.findByIdAndUpdate(
      groupId,
      { name },
      { new: true }
    );

    res.json(group);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
export const deleteGroup = async (req: AuthRequest, res: Response) => {
  try {
    const { groupId } = req.params;

    await Group.findByIdAndDelete(groupId);

    res.json({ msg: "Group deleted successfully" });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
export const searchGroups = async (req: AuthRequest, res: Response) => {
  try {
    const { q } = req.query;

    const groups = await Group.find({
      name: { $regex: q as string, $options: "i" },
      "members.userId": req.userId,
    });

    res.json(groups);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
