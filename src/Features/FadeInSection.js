import React, { useEffect, useRef, useState } from "react";

function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.8) {
        // Nếu phần tử nằm trong 80% chiều cao màn hình
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
}

export default FadeInSection;
