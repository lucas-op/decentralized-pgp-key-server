import { create, SetState } from "zustand";

interface StoreState {
  keys: any[];
  addKey: (key: any) => void;
}

const useStore = create<StoreState>((set: SetState<StoreState>) => ({
  keys: [],
  addKey: (key: any) => set((state) => ({ keys: [...state.keys, key] })),
}));

export default useStore;
