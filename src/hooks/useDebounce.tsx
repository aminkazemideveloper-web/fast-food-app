import { useEffect, useState } from "react";
export const useDebounce = (searchText: string, delay = 500) => {
  const [text, setText] = useState(searchText);
  useEffect(() => {
    const timer = setTimeout(() => {
      setText(searchText);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, delay]);
  return { text };
};
