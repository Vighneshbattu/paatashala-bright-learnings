
export const useSymbolAnimation = (containerRef: React.RefObject<HTMLDivElement>) => {
  const setupAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const symbols = containerRef.current?.querySelectorAll('.symbol');
            symbols?.forEach((symbol, i) => {
              setTimeout(() => {
                symbol.classList.add('animate-in');
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  };

  return { setupAnimation };
};
