import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export function useDarkMode() {
  const [value, setValue] = useLocalStorage("dark");

  useEffect(() => {
    const body = window.document.body;
    if (value) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
}
