import { useEffect } from "react";

export function useOutsideClick(ref, onInside, onOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref && !ref.contains(event.target)) {
        if (typeof onOutside === "function") {
          onOutside();
        }
      } else {
        if (typeof onInside === "function") {
          onInside();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
