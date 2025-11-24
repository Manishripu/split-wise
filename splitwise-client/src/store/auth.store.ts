import { create } from "zustand";
import { User } from "../models/user.model";

interface AuthState {
  user: User | null;
  token: string | null;

  login: (user: User, token: string) => void;
  logout: () => void;
  loadUserFromStorage: () => void;
}

export const useAuth = create<AuthState>(
  (set: (arg0: { user: any; token: string | null }) => void) => ({
    user: null,
    token: null,

    // Called when user logs in
    login: (user: User, token: string) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      set({ user, token });
    },

    // Called when user clicks logout
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      set({ user: null, token: null });
    },

    // Restore auth state when app refreshes
    loadUserFromStorage: () => {
      const storedToken = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");

      if (storedToken && storedUser) {
        set({
          token: storedToken,
          user: JSON.parse(storedUser),
        });
      }
    },
  })
);
