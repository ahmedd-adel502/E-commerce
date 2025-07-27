import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={
        `fixed bottom-6 right-6 z-50 p-3 cursor-pointer rounded-full bg-primary-600 text-white shadow-lg transition-opacity duration-300",
        ${
          isVisible
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
      `}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faArrowUp} size="18" />
    </button>
  );
}
