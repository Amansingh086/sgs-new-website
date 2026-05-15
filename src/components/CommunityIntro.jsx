import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// CSS Animation Styles
const animationStyles = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out 0.15s forwards;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}

function CommunityIntro() {
  const sectionRef = useRef(null)
  const leftImageRef = useRef(null)
  const rightContentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Component is visible - add animations
            if (leftImageRef.current) {
              leftImageRef.current.classList.remove('animate-slide-in-left')
              // Trigger reflow to restart animation
              void leftImageRef.current.offsetWidth
              leftImageRef.current.classList.add('animate-slide-in-left')
            }
            if (rightContentRef.current) {
              rightContentRef.current.classList.remove('animate-slide-in-right')
              // Trigger reflow to restart animation
              void rightContentRef.current.offsetWidth
              rightContentRef.current.classList.add('animate-slide-in-right')
            }
          } else {
            // Component left viewport - remove animations so they can replay
            if (leftImageRef.current) {
              leftImageRef.current.classList.remove('animate-slide-in-left')
            }
            if (rightContentRef.current) {
              rightContentRef.current.classList.remove('animate-slide-in-right')
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  return (
    <section ref={sectionRef} className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
                      grid grid-cols-1 lg:grid-cols-2
                      gap-8 sm:gap-10 md:gap-12 lg:gap-16
                      lg:items-center">

        {/* Left Side: Image */}
        <div ref={leftImageRef} className="w-full">
          <div className="relative w-full overflow-hidden rounded-xl
                          h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] xl:h-[500px]">
            <img
              src="/about.jpg"
              alt="Samyukt Gujarati Samaj members"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div ref={rightContentRef} className="w-full lg:pl-6 xl:pl-10">

          {/* About label */}
          <span className="mb-2 sm:mb-3 inline-block
                           text-xs sm:text-sm
                           font-bold uppercase tracking-widest text-[#31c4f3]">
            About
          </span>

          {/* Heading */}
          <h2 className="mb-3 sm:mb-4
                         text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
                         font-extrabold leading-tight text-[#060315]">
            Samyukt Gujarati Samaj
          </h2>

          {/* Body text */}
          <div className="space-y-4 sm:space-y-5
                          text-xs sm:text-sm md:text-base
                          leading-relaxed text-[#555555] text-justify">
            <p>
              A united community celebrating our culture, values, and togetherness. We bring
              Gujaratis living away from home closer through social, cultural, and charitable
              activities. Join us in preserving traditions while creating new bonds of friendship
              and growth.
            </p>
            <p>
              Samyukt Gujarati Samaj is a vibrant community organization formed with the vision of
              uniting Gujaratis under one platform. Our mission is to promote cultural heritage,
              strengthen community relationships, and support members in social, educational, and
              charitable initiatives. With regular gatherings, festivals, and programs, we aim to
              keep the spirit of Gujarat alive wherever we are.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-5 sm:mt-6 md:mt-7">
            <Link
              to="/about"
              className="inline-block bg-[#ff3e41] hover:bg-[#d72d30]
                         text-white font-bold shadow-lg hover:shadow-xl
                         transition-all duration-300 active:scale-95
                         text-sm sm:text-base md:text-lg
                         px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                         rounded-sm"
            >
              Explore More
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CommunityIntro
