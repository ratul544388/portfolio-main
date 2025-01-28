import { create } from "zustand";

interface NavState {
  activeNavLink?: string;
  setActiveNavLink: (link: string) => void;
  lastClicked: Date;
  setLastClicked: () => void;
}

export const useNavStore = create<NavState>()((set) => ({
  activeNavLink: undefined,
  setActiveNavLink: (link) => set({ activeNavLink: link }),
  lastClicked: new Date(),
  setLastClicked: () => set({ lastClicked: new Date() }),
}));
