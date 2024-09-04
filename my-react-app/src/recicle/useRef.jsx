import { useEffect, useRef } from "react";
const useref = (setShow) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        const dropdowns = document.querySelectorAll('.p-dropdown-panel, .p-multiselect-panel');
        let clickedInsideDropdown = false;
        
        dropdowns.forEach(dropdown => {
          if (dropdown.contains(e.target)) {
            clickedInsideDropdown = true;
          }
        });

        if (!clickedInsideDropdown) {
          setShow(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShow]);

  return ref;
};

export default useref;

