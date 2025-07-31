import { create } from "zustand";

const usePublicSession = create((set) => ({
  loading: true,
  setLoadng: (val) => set({ loading: val }),
  createdAt: 0,
  setCreatedAt: (val) => set({ createdAt: val }),
  updatedAt: 0,
  setUpdatedAt: (val) => set({ updatedAt: val }),
  expiresAt: 0,
  setExpiresAt: (val) => set({ expiresAt: val }),
}));

export default usePublicSession;
