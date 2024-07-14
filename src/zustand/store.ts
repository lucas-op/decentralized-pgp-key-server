import create from "zustand";

interface StoreState {
  userAddress: string;
  ipfsHash: string;
  setUserAddress: (address: string) => void;
  setIpfsHash: (hash: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  userAddress: "",
  ipfsHash: "",
  setUserAddress: (address) => set({ userAddress: address }),
  setIpfsHash: (hash) => set({ ipfsHash: hash }),
}));
