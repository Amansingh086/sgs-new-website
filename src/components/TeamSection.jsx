import { useEffect, useRef, useState } from 'react'

const teamMembers = [
  {
    id: 1,
    name: 'Full Name',
    role: 'Designation',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg',
  },
  {
    id: 2,
    name: 'Full Name',
    role: 'Designation',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/team-2.jpg',
  },
  {
    id: 3,
    name: 'Full Name',
    role: 'Designation',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/team-3.jpg',
  },
  {
    id: 4,
    name: 'Full Name',
    role: 'Designation',
    image: 'https://samyuktgujaratisamaj.com/draft1/img/team-1.jpg',
  },
]

function TeamSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset first so animation re-fires each time
          setVisible(false)
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true)
            })
          })
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#0b1625] via-[#102238] to-[#0d2a4a] py-20 text-white"
    >
      {/* Animated background orbs */}
      <div className="team-orb team-orb-1" />
      <div className="team-orb team-orb-2" />
      <div className="team-orb team-orb-3" />

      <div className="relative mx-auto w-full max-w-[1320px] px-6">

        {/* ── Header ── */}
        <div
          className="mx-auto mb-16 max-w-3xl text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-32px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <span className="team-badge">
            <span className="team-badge-shimmer" />
            ✦ Our Team ✦
          </span>

          <h2
            className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            Expert Team Members
          </h2>

          <p
            className="mt-5 text-base leading-relaxed text-[#c8d7e4] sm:text-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            }}
          >
            Meet the strong team behind Samyukt Gujarati Samaj — experienced
            professionals dedicated to creating memorable events, trusted
            services, and community impact.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className="team-card group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.92)',
                transition: `opacity 0.65s ease ${0.35 + index * 0.15}s, transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${0.35 + index * 0.15}s`,
              }}
            >
              {/* Glowing border overlay */}
              <div className="team-card-glow" />

              {/* Image */}
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#6dd0ff]">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8ab4d5]">
                  {member.role}
                </p>
                <div className="my-3 h-px w-10 rounded bg-[#6dd0ff]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#6dd0ff]/60" />
                <p className="text-sm leading-relaxed text-[#c8d7e4]">
                  A trusted expert ensuring every event and service runs
                  smoothly, with attention to quality and community values.
                </p>

                {/* Social row */}
                <div className="mt-4 flex gap-3">
                  {['f', 'in', 't'].map((s) => (
                    <span
                      key={s}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-[#6dd0ff] transition-all duration-300 hover:border-[#6dd0ff] hover:bg-[#6dd0ff]/10 hover:shadow-[0_0_12px_#6dd0ff55] cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Background orbs ── */
        .team-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .team-orb-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(48,108,182,0.25) 0%, transparent 70%);
          top: -100px; left: -80px;
          animation: teamFloat 8s ease-in-out infinite;
        }
        .team-orb-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(109,208,255,0.15) 0%, transparent 70%);
          bottom: -60px; right: -60px;
          animation: teamFloat 10s ease-in-out infinite reverse;
        }
        .team-orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(255,62,65,0.12) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: teamFloat 12s ease-in-out infinite 2s;
        }
        @keyframes teamFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-18px) translateX(10px); }
          66%       { transform: translateY(10px) translateX(-10px); }
        }

        /* ── Badge ── */
        .team-badge {
          position: relative;
          display: inline-block;
          overflow: hidden;
          padding: 6px 22px;
          border-radius: 999px;
          border: 1px solid rgba(109,208,255,0.35);
          background: rgba(109,208,255,0.08);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #6dd0ff;
          animation: teamBadgePulse 3s ease-in-out infinite;
        }
        .team-badge-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(109,208,255,0.35) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: teamShimmer 2.5s linear infinite;
        }
        @keyframes teamShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes teamBadgePulse {
          0%, 100% { box-shadow: 0 0 0px rgba(109,208,255,0.3); }
          50%       { box-shadow: 0 0 18px rgba(109,208,255,0.5); }
        }

        /* ── Cards ── */
        .team-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 80px -40px rgba(0,0,0,0.6);
          transition:
            transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }
        .team-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow:
            0 32px 80px -20px rgba(0,0,0,0.7),
            0 0 40px rgba(109,208,255,0.12);
          border-color: rgba(109,208,255,0.3);
        }

        /* Glowing top-edge on hover */
        .team-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 28px;
          opacity: 0;
          pointer-events: none;
          background: linear-gradient(
            135deg,
            rgba(109,208,255,0.06) 0%,
            transparent 60%
          );
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .team-card:hover .team-card-glow {
          opacity: 1;
        }
        .team-card > *:not(.team-card-glow) {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  )
}

export default TeamSection
