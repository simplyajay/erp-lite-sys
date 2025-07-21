import { create } from "zustand";

const usePublicSession = create((set) => ({
  loading: true,
  setLoading: (val) => set({ loading: val }),
  flow: "accountType",
  setFlow: (val) => set({ flow: val }),
  identity: null,
  setIdentity: (val) => set({ identity: val }),
  currentStep: 1,
  setCurrentStep: (val) =>
    set((state) => ({ currentStep: typeof val === "function" ? val(state.currentStep) : val })),
  currentError: { status: undefined, message: null },
  setCurrentError: (val = {}) => set({ currentError: val }),
  removeCurrentError: () => set({ currentError: { status: undefined, message: null } }),

  createdAt: undefined,
  setCreatedAt: (val) => set({ createdAt: val }),
  expiresAt: undefined,
  setExpiresAt: (val) => set({ expiresAt: val }),
}));

export default usePublicSession;
