import React, { useState, useEffect, useRef } from 'react';

export default function StatCounter({ target, prefix = '', suffix = '', duration = 1600, className = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();
            const numericTarget = parseInt(target, 10);

            const updateCounter = (currentTime) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentVal = Math.floor(easeOutExpo * numericTarget);

              setCount(currentVal);

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCount(numericTarget);
              }
            };

            requestAnimationFrame(updateCounter);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={`animate-counter ${className}`}>
      {prefix}
      {hasAnimated ? count.toLocaleString('en-IN') : '0'}
      {suffix}
    </span>
  );
}
