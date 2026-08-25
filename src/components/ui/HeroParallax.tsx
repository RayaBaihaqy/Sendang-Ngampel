import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export function HeroParallax() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0.5,
        },
      });

      const layers = [
        { layer: '1', yPercent: 40 },
        { layer: '3', yPercent: 20 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: 'none',
          },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax font-sans" ref={parallaxRef}>
      <section className="parallax__header relative w-full h-screen min-h-[680px] flex items-center justify-center">
        <div className="parallax__visuals absolute inset-0 w-full h-full overflow-hidden">
          <div data-parallax-layers className="parallax__layers relative w-full h-full">
            {/* Layer 1: Real Background Photo */}
            <img
              src="/images/sendang/bg.png"
              loading="eager"
              data-parallax-layer="1"
              alt="Background Sendang Ngampel Wetan"
              className="parallax__layer-img absolute top-0 left-0 w-full h-[125%] object-cover brightness-[0.8]"
            />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-heritage-dark-brown/60 via-heritage-dark-brown/30 to-heritage-dark-brown/70 pointer-events-none z-0"></div>

            {/* Layer 3: Main Title Overlay */}
            <div
              data-parallax-layer="3"
              className="parallax__layer-title absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 -translate-y-6 sm:-translate-y-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-heritage-gold-accent/40 bg-heritage-dark-brown/80 mb-4 backdrop-blur-sm">
                <span className="text-heritage-gold-accent text-xs font-serif italic">Digital Heritage Archive</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-heritage-warm-cream tracking-tight drop-shadow-lg max-w-5xl leading-[1.1]">
                Sendang Ngampel Wetan
              </h1>

              <p className="mt-4 text-base sm:text-xl text-heritage-cream/90 max-w-2xl font-light tracking-wide drop-shadow-md">
                Situs bersejarah &amp; dokumentasi legenda lokal masyarakat Krajan 1, Desa Ngampel Wetan, Kendal
              </p>
            </div>
          </div>

          {/* Gradient Transition */}
          <div className="parallax__fade"></div>

          {/* Wavy Crest Line & Gradient Divider */}
          <div className="batik-bottom-divider"></div>
        </div>
      </section>
    </div>
  );
}
