import React, { useRef, useEffect, useState } from 'react';

const FadeElement = (pageProps) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const children=pageProps.children;

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
      id={pageProps.id}
      ref={elementRef}
      className={`${
        isVisible ? pageProps.after : pageProps.before
      } transition-all transform duration-[1000ms] ease-in-out h-full ${pageProps.className}`}
    >
      {children}
    </div>
  );
};

export default FadeElement;
