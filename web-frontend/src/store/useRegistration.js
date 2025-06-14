import { create } from "zustand";

const useRegistrationUiStore = create((set) => ({
  loading: false,
  setLoading: (val) => set({ loading: val }),
  currentStep: 1,
  setCurrentStep: (val) =>
    set((state) => ({ currentStep: typeof val === "function" ? val(state.currentStep) : val })),
  currentError: { status: undefined, message: null },
  setCurrentError: (val = {}) => set({ currentError: val }),
  removeCurrentError: () => set({ currentError: { status: undefined, message: null } }),
}));

export default useRegistrationUiStore;
