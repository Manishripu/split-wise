import { create } from "zustand";
import { createGroup, getMyGroups } from "../services/group.service";

interface GroupState {
  groups: any[];
  loading: boolean;

  fetchGroups: () => Promise<void>;
  addGroup: (name: string, members: any[]) => Promise<any>;
}

export const useGroupStore = create<GroupState>()(
  (
    set: (arg0: { loading?: boolean; groups?: any }) => void,
    get: () => { (): any; new (): any; groups: any }
  ) => ({
    groups: [],
    loading: false,

    fetchGroups: async () => {
      set({ loading: true });
      const data = await getMyGroups();
      set({ groups: data, loading: false });
    },

    addGroup: async (name: string, members: any[]) => {
      const newGroup = await createGroup(name, members);

      // update state
      set({ groups: [...get().groups, newGroup] });

      return newGroup;
    },
  })
);
