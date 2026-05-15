import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sanjay Patel',
    role: 'Event Coordinator',
    company: 'Gujarati Unity Network',
    quote:
      'Samyukt Gujarati Samaj delivered a flawless experience. Their team supported every detail from logistics to cultural programming, and the result was unforgettable.',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-3.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Neha Shah',
    role: 'Community Leader',
    company: 'Bengaluru Gujarati Forum',
    quote:
      'The community support and polished event planning made our festival shine. Their care and professionalism are truly top-tier.',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rohan Desai',
    role: 'Business Partner',
    company: 'Heritage Events',
    quote:
      'Every interaction felt personal and reliable. I highly recommend Samyukt Gujarati Samaj for anyone seeking premium cultural services.',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/testimonial-1.jpg',
    rating: 5,
  },
]

function StarRating({ count, visible, delay }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="testi-star"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-45deg)',
            transition: `opacity 0.4s ease ${delay + i * 0.07}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + i * 0.07}s`,
          }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false)
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setVisible(true)),
          )
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.12 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#7d9ec0] py-20 lg:py-24"
    >
      {/* Animated wave rings */}
      <div className="testi-ring testi-ring-1" />
      <div className="testi-ring testi-ring-2" />
      <div className="testi-ring testi-ring-3" />

      <div className="relative mx-auto max-w-[1320px] px-6">

        {/* ── Header — slides in from left ── */}
        <div className="mb-14 text-center">
          <span
            className="testi-label"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <span className="testi-label-dot" />
            Testimonial
            <span className="testi-label-dot" />
          </span>

          <h2
            className="mt-5 text-4xl font-extrabold text-[#07102e] sm:text-5xl"
            style={{
              opacity: visible ? 1 : 0,
              clipPath: visible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
              transition: 'opacity 0.7s ease 0.15s, clip-path 0.7s cubic-bezier(0.77,0,0.18,1) 0.15s',
            }}
          >
            Our Clients Say!
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1e3a5f] sm:text-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(60px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            Trusted by community leaders, event organizers, and members alike,
            our work creates memorable experiences with heart and precision.
          </p>
        </div>

        {/* ── Cards — alternating flip-in ── */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <article
                key={item.id}
                className="testi-card group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'perspective(800px) rotateY(0deg) translateY(0px)'
                    : `perspective(800px) rotateY(${isEven ? '-25deg' : '25deg'}) translateY(40px)`,
                  transition: `opacity 0.7s ease ${0.4 + index * 0.18}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${0.4 + index * 0.18}s`,
                }}
              >
                {/* Giant quote mark */}
                <div
                  className="testi-quote-mark"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(0)',
                    transition: `opacity 0.5s ease ${0.65 + index * 0.18}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.65 + index * 0.18}s`,
                  }}
                >
                  "
                </div>

                {/* Image with ken-burns zoom */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="testi-img h-52 w-full object-cover object-center"
                  />
                  {/* Name overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 py-4 text-white">
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#31c4f3]"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(10px)',
                        transition: `opacity 0.5s ease ${0.75 + index * 0.18}s, transform 0.5s ease ${0.75 + index * 0.18}s`,
                      }}
                    >
                      {item.role}
                    </p>
                    <h3
                      className="text-lg font-bold"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(10px)',
                        transition: `opacity 0.5s ease ${0.82 + index * 0.18}s, transform 0.5s ease ${0.82 + index * 0.18}s`,
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-4 p-6">
                  {/* Stars pop in */}
                  <StarRating
                    count={item.rating}
                    visible={visible}
                    delay={0.85 + index * 0.18}
                  />

                  <p
                    className="text-base italic leading-relaxed text-[#334155]"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(12px)',
                      transition: `opacity 0.5s ease ${0.95 + index * 0.18}s, transform 0.5s ease ${0.95 + index * 0.18}s`,
                    }}
                  >
                    "{item.quote}"
                  </p>

                  {/* Company tag slides in */}
                  <div
                    className="testi-company-tag"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                      transition: `opacity 0.5s ease ${1.05 + index * 0.18}s, transform 0.5s ease ${1.05 + index * 0.18}s`,
                    }}
                  >
                    <span className="testi-company-dot" />
                    {item.company}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <style>{`
        /* ── Animated ring waves ── */
        .testi-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          pointer-events: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .testi-ring-1 {
          width: 400px; height: 400px;
          animation: testiRipple 6s ease-out infinite;
        }
        .testi-ring-2 {
          width: 700px; height: 700px;
          animation: testiRipple 6s ease-out infinite 2s;
        }
        .testi-ring-3 {
          width: 1000px; height: 1000px;
          animation: testiRipple 6s ease-out infinite 4s;
        }
        @keyframes testiRipple {
          0%   { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(1.2); }
        }

        /* ── Label ── */
        .testi-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 5px 18px;
          border-radius: 999px;
          background: rgba(49,196,243,0.15);
          border: 1px solid rgba(49,196,243,0.4);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #07102e;
        }
        .testi-label-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #31c4f3;
          animation: testiDotPulse 1.6s ease-in-out infinite;
        }
        @keyframes testiDotPulse {
          0%, 100% { transform: scale(1);   opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0.6; }
        }

        /* ── Cards ── */
        .testi-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 20px 60px -25px rgba(7,16,46,0.2);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.4s ease;
        }
        .testi-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 32px 80px -20px rgba(7,16,46,0.3),
                      0 0 0 2px rgba(49,196,243,0.35);
        }

        /* Giant opening quote */
        .testi-quote-mark {
          position: absolute;
          top: 8px; right: 16px;
          font-size: 6rem;
          line-height: 1;
          font-family: Georgia, serif;
          color: rgba(49,196,243,0.18);
          pointer-events: none;
          z-index: 10;
          transition: color 0.3s ease;
        }
        .testi-card:hover .testi-quote-mark {
          color: rgba(49,196,243,0.35);
        }

        /* Image ken-burns */
        .testi-img {
          transition: transform 8s ease;
          transform: scale(1.06);
        }
        .testi-card:hover .testi-img {
          transform: scale(1);
        }

        /* Stars */
        .testi-star {
          display: inline-block;
          font-size: 1.1rem;
          color: #f59e0b;
          filter: drop-shadow(0 0 4px rgba(245,158,11,0.6));
        }

        /* Company tag */
        .testi-company-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: #eef2ff;
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          border: 1px solid rgba(49,196,243,0.2);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .testi-card:hover .testi-company-tag {
          background: rgba(49,196,243,0.1);
          border-color: rgba(49,196,243,0.5);
        }
        .testi-company-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #31c4f3;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  )
}

export default TestimonialsSection
