import { useState, type PropsWithChildren } from "react";
import { HeaderContext } from "../context/HeaderContext";
export type CloseType = "open" | "close";
type ProviderPropsType = PropsWithChildren;

function HeaderProvider({ children }: ProviderPropsType) {
  const [isCollapse, setIsCollaps] = useState(false);
  const [isOpen, setIsOpen] = useState<CloseType>("close");

  const toggleCollaps = () => {
    setIsCollaps((prev) => !prev);
  };
  const toggleOpen = () => {
    setIsOpen((prev) => (prev === "close" ? "open" : "close"));
  };

  return (
    <HeaderContext value={{ isCollapse, toggleCollaps, isOpen, toggleOpen }}>
      {children}
    </HeaderContext>
  );
}

export default HeaderProvider;
