import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CloseType = "open" | "close";

type State = {
  isCollaps: boolean;
  isOpen: CloseType;
};

type Action = {
  toggleSidebar: () => void;
  toggleOpen: () => void;
};

export const useSidebareStore = create<State & Action>()(
  persist(
    (set) => ({
      isCollaps: false,
      isOpen: "close",
      toggleSidebar: () => {
        set((state) => ({ isCollaps: !state.isCollaps }));
      },
      toggleOpen: () => {
        set((state) => ({
          isOpen: state.isOpen === "close" ? "open" : "close",
        }));
      },
    }),
    { name: "collaps" },
  ),
);
