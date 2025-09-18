// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState, MutableRefObject } from 'react';

// Returns a ref to attach to the target element, and a boolean indicating if it's intersecting
export const useIntersectionObserver = (options: IntersectionObserverInit = { threshold: 0.9 }): [MutableRefObject<any>, boolean] => {
  const targetRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set to true only if the element is in view by the specified threshold (e.g., 90%)
      setIntersecting(entry.isIntersecting); 
    }, options);

    const currentRef = targetRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, options.root, options.rootMargin, options.threshold]); // Depend on options

  return [targetRef, isIntersecting];
};