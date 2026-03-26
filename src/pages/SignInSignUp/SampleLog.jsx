import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SampleLog = () => {
  const boxRef = useRef(null);
  const secondSectionRef = useRef(null);

  useEffect(() => {
    // Create scroll-triggered animation - from left edge to center
    const animation = gsap.fromTo(
      boxRef.current,
      {
        x: '-100%',      // Start completely off-screen left (very left)
        opacity: 0,
      },
      {
        x: '500px',       // End at center position
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    // Cleanup
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return(
    <>
      <main className="flex flex-col w-full min-h-screen relative overflow-x-hidden">
        <section className="flex w-full h-screen bg-white items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Scroll down</h1>
            <p className="text-gray-600">GSAP ScrollTrigger Animation</p>
          </div>
        </section>

        <section 
          ref={secondSectionRef}
          className="flex flex-col w-full h-screen bg-blue-50 relative"
        >
          {/* Animated box that slides from very left to center */}
          <div 
            ref={boxRef}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-lg shadow-2xl"
          >
            <div className="flex items-center justify-center h-full text-white font-bold text-xl">
              GSAP Box
            </div>
          </div>
        </section>

        <section className="w-full h-screen bg-red-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Third Section</h1>
            <p className="text-gray-700">Scroll up to see the box slide back</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SampleLog;