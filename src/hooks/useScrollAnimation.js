import { useEffect } from "react";

export const useScrollAnimation = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show"); // add class when visible
          observer.unobserve(element);   // animate only once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
};
