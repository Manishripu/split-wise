import { api } from "../api/axios";

export const createGroup = async (name: string, members: any[]) => {
  const res = await api.post("/api/group", { name, members });
  return res.data;
};

export const getMyGroups = async () => {
  const res = await api.get("/api/group");
  return res.data;
};

export const getGroupDetails = async (groupId: string) => {
  const res = await api.get(`/api/group/${groupId}`);
  return res.data;
};

export const addMember = async (groupId: string, member: any) => {
  const res = await api.post(`/api/group/${groupId}/members`, member);
  return res.data;
};

export const deleteGroup = async (groupId: string) => {
  const res = await api.delete(`/api/group/${groupId}`);
  return res.data;
};
