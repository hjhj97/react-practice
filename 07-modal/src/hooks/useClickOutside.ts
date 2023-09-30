import React, { MutableRefObject, useEffect } from "react";

function useClickOutside(ref: MutableRefObject<HTMLElement | null>, callbackFn: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackFn();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return {};
}

export default useClickOutside;
