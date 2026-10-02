import { createContext } from "react";
import type { CloseType } from "../providers/HeaderProvider";

type ContextHeaderProps = {
  isOpen: CloseType;
  isCollapse: boolean;
  toggleCollaps: () => void;
  toggleOpen: () => void;
};

export const HeaderContext = createContext({} as ContextHeaderProps);
