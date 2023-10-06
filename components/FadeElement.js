import React, { useRef, useEffect, useState } from 'react';

const FadeElement = ({children}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
            setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-all transform duration-[2000ms] ease-in-out h-full`}
    >
      {children}
    </div>
  );
};

export default FadeElement;
