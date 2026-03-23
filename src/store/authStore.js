import { create } from "zustand";

export const useAuthStore = create((set) => ({
  // * STATE
  user: null,
  token: null,
  isAuthenticated: false,

  // * LOGIN
  login: (userData, token) => {
    // SAUVEGARDE LOCAL (PERSISTENCE)
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    set({
      user: userData,
      token: token,
      isAuthenticated: true,
    });
  },

  // * LOGOUT
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  // * INIT
  loadUserFromStorage: () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      set({
        user,
        token,
        isAuthenticated: true,
      });
    }
  },
}));
