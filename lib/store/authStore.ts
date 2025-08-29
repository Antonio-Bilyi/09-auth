import { AuthStore, User } from "@/types/user";
import { create } from "zustand";

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    user: null,
    setUser: (user: User) => {
        set(() => ({ user, isAuthenticated: true }));
    },
    clearIsAuthenticated: () => {
        set(() => ({ user: null, isAuthenticated: false }));
    },
}));