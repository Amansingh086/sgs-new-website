import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Slide data – you can extend this array with more slides if needed
const slides = [
  {
    image: '/slider/banner1.jpg',
    alt: 'Samyukt Gujarati Samaj banner',
    eyebrow: 'Welcome to',
    title: 'Samyukt Gujarati Samaj',
    description: 'Preserving Traditions, Connecting Hearts.',
    cta: 'Explore',
    link: '/about',
  },
  {
    image: '/slider/banner2.jpg',
    alt: 'Samyukt Gujarati Samaj community banner',
    eyebrow: 'Team',
    title: 'Sardar Patel Bhavan',
    description: 'Traditional Gujarati Architecture',
    cta: 'Visit',
    link: '/heritage',
  },
];

// CSS Animation Styles
const animationStyles = `
  @keyframes fadeInImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUpContent {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-image {
    animation: fadeInImage 1.5s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-up-content {
    animation: slideUpContent 1.5s ease-out 0.4s forwards;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}

/**
 * WelcomeSection – a premium mobile‑first carousel.
 *
 * Design goals:
 *   • Full‑width hero image that scales nicely on any device.
 *   • Text overlay with a dark gradient for readability.
 *   • Smooth slide transition (fade) and optional auto‑play.
 *   • Accessible navigation arrows and dot indicators.
 */
export default function WelcomeSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const slideCount = slides.length;
  const current = slides[activeSlide];

  // Auto‑play – change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const restartAnimation = (element, className) => {
      if (!element) return;
      element.classList.remove(className);
      void element.offsetWidth;
      element.classList.add(className);
    };

    if (isVisible) {
      restartAnimation(imageRef.current, 'animate-fade-in-image');
      restartAnimation(contentRef.current, 'animate-slide-up-content');
    }
  }, [activeSlide, isVisible]);

  // Manual navigation helpers
  const goToSlide = (index) => setActiveSlide(index);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section ref={sectionRef} className="relative w-full max-w-full h-[55vh] sm:h-[70vh] md:h-[85vh] lg:h-screen xl:h-[95vh] 2xl:h-[90vh] overflow-hidden">

      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-0"
        style={{ backgroundImage: `url(${current.image})` }}
        aria-label={current.alt}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Content overlay – pb ensures dots don't overlap text */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white opacity-0
                   px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28
                   pb-14 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28"
      >
        {/* Eyebrow label */}
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg
                      font-semibold tracking-[0.2em] sm:tracking-[0.25em]
                      uppercase mb-1 sm:mb-2 md:mb-3 opacity-80">
          {current.eyebrow}
        </p>

        {/* Main title */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                       font-extrabold leading-tight
                       mb-3 sm:mb-4 md:mb-5 lg:mb-6
                       drop-shadow-lg">
          {current.title}
        </h1>

        {/* Description */}
        <p className="max-w-[85%] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl
                      text-[px] sm:text-sm md:text-base lg:text-lg xl:text-xl
                      leading-relaxed
                      mb-4 sm:mb-6 md:mb-7 lg:mb-8
                      drop-shadow-md opacity-90">
          {current.description}
        </p>

        {/* CTA Button */}
        {current.cta && current.link && (
          <Link
            to={current.link}
            className="inline-block bg-primary-600 hover:bg-primary-700
                       focus:ring-4 focus:ring-primary-300
                       text-white font-semibold rounded-md transition
                       text-[11px] sm:text-sm md:text-base lg:text-base xl:text-lg
                       py-1.5 px-5 sm:py-2.5 sm:px-7 md:py-3 md:px-9 lg:py-3.5 lg:px-11 xl:py-4 xl:px-14"
          >
            {current.cta}
          </Link>
        )}
      </div>

      {/* Navigation Arrows – visible on all screens, compact on mobile */}
      <button
        onClick={prevSlide}
        className="flex absolute top-1/2 -translate-y-1/2 z-20
                   left-2 sm:left-4 md:left-5 lg:left-7 xl:left-10
                   bg-black/40 hover:bg-black/65 text-white rounded-full
                   p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4
                   focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="flex absolute top-1/2 -translate-y-1/2 z-20
                   right-2 sm:right-4 md:right-5 lg:right-7 xl:right-10
                   bg-black/40 hover:bg-black/65 text-white rounded-full
                   p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-4
                   focus:outline-none focus:ring-2 focus:ring-white transition"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute z-20 left-0 right-0 flex justify-center
                      bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-7 xl:bottom-9
                      space-x-1.5 sm:space-x-2 md:space-x-2.5 lg:space-x-3 xl:space-x-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`rounded-full transition
              w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4
              ${idx === activeSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
