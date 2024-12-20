import { useEffect, useRef } from 'react';

interface InfiniteScrollObserverProps {
   callback: () => void;
}

export function InfiniteScrollObserver({ callback }: InfiniteScrollObserverProps) {
   const infiniteScrollRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const intersectionObserver = new IntersectionObserver(([entry]) => {
         const ratio = entry.intersectionRatio;

         if (ratio > 0) {
            callback();
         }
      });

      if (infiniteScrollRef.current)
         intersectionObserver.observe(infiniteScrollRef.current);

      return () => {
         intersectionObserver.disconnect();
      };
   }, [infiniteScrollRef]);

   return <div ref={infiniteScrollRef} />;
}
