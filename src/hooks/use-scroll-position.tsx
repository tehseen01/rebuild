import { useEffect, useState } from "react";

interface UseScrollPositionProps {
  initialPosition: number;
  threshold: number;
}

const useScrollPosition = ({
  initialPosition = 0,
  threshold = 50,
}: UseScrollPositionProps) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(initialPosition);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      if (isScrollingUp && currentScrollPos > threshold) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, threshold]);

  return { isHeaderFixed, prevScrollPos } as const;
};

export default useScrollPosition;
