function RegisterPage() {
  const benefits = [
    {
      title: "Exclusive Events",
      desc: "Access to community events",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Network",
      desc: "Connect with like-minded people",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
    },
    {
      title: "Member Benefits",
      desc: "Special discounts & offers",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 10v2m8-10v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8l8-5 8 5z"
        />
      ),
    },
  ]

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-blue-50 min-h-screen py-12 sm:py-16 md:py-24">
      <section className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#31c4f3] font-bold bg-blue-50 px-4 py-2 rounded-full border border-[#31c4f3]/20">
              Join Our Community
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4 leading-tight">
            Become Part of Samyukt Gujarati Samaj
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-2">
            Join thousands of members celebrating Gujarati culture, heritage, and traditions.
            Register today to access exclusive events and community benefits.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/40 overflow-hidden hover:shadow-2xl hover:shadow-[#31c4f3]/15 transition-all duration-300">
            {/* Form Header with Accent */}
            <div className="h-1 bg-gradient-to-r from-[#31c4f3] via-blue-500 to-[#31c4f3]" />

            <div className="p-8 sm:p-10 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2 flex items-center gap-3">
                <svg className="w-8 h-8 text-[#31c4f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Registration Form
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-8">
                Fill in your details below. All fields marked with * are required.
              </p>

              <form className="grid gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 sm:py-4 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300"
                  />
                </div>

                {/* Email Address */}
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 sm:py-4 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300"
                  />
                </div>

                {/* Phone Number */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 sm:py-4 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300"
                  />
                </div>

                {/* City/Location */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">
                    City/Location
                  </label>
                  <input
                    type="text"
                    placeholder="Your city"
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 sm:py-4 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300"
                  />
                </div>

                {/* Interests */}
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-[#31c4f3] transition">
                    What are you interested in?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Events", "Community", "Heritage", "Volunteering", "Networking", "Culture"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer hover:text-[#31c4f3] transition">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-300 text-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20"
                        />
                        <span className="text-sm text-slate-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2 group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">
                    Tell us about yourself
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you'd like us to know..."
                    className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 sm:py-4 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none resize-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300"
                  />
                </div>

                {/* Checkbox Agreement */}
                <div className="md:col-span-2 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="w-5 h-5 mt-1 rounded border-slate-300 text-[#31c4f3] focus:ring-2 focus:ring-[#31c4f3]/20 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-sm text-slate-600 cursor-pointer">
                    I agree to receive updates and community information.{" "}
                    <span className="text-[#31c4f3] font-semibold">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#31c4f3] to-blue-500 hover:from-[#22a4ef] hover:to-blue-600 text-white font-bold py-3 sm:py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#31c4f3]/40 active:scale-95 flex items-center justify-center gap-2 text-base sm:text-lg"
                  >
                    <span>Complete Registration</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>

                {/* Info Text */}
                <p className="md:col-span-2 text-xs text-center text-slate-500">
                  Your information is secure and will only be used for community communications.
                </p>
              </form>
            </div>

            {/* Footer Info Bar */}
            <div className="bg-gradient-to-r from-[#31c4f3]/5 to-blue-500/5 border-t border-slate-200 px-8 sm:px-10 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#31c4f3]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Registration
              </div>
              <div className="text-center sm:text-left">
                Questions?{" "}
                <a href="tel:+916287678767" className="text-[#31c4f3] font-semibold hover:text-[#22a4ef] transition">
                  Call us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto max-w-4xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:border-[#31c4f3] hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-8 h-8 mx-auto mb-3 text-[#31c4f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {benefit.icon}
              </svg>
              <h3 className="font-bold text-slate-950 text-sm sm:text-base">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RegisterPage
