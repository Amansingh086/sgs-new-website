import Footer from "./Footer"

function ContactPage() {
  return (
    <>
    
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <section className="mx-auto max-w-[1320px] px-4 sm:px-6 py-16 sm:py-24">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.35em] text-[#31c4f3] font-semibold mb-2">Get Connected</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 mb-4">We'd Love to Hear From You</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">Join our vibrant Gujarati community. Reach out for events, collaborations, or simply to say hello.</p>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#31c4f3]/10 via-white to-blue-50/30 rounded-[32px] border border-[#31c4f3]/20 p-8 sm:p-10 shadow-xl shadow-[#31c4f3]/5">
              <div className="space-y-8">
                {/* Contact Info Item 1 */}
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#31c4f3] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold">Phone Number</p>
                  <p className="mt-3 text-lg sm:text-xl font-bold text-slate-900">+91 62876 78767</p>
                  <a href="tel:+916287678767" className="inline-block mt-2 text-[#31c4f3] font-semibold hover:text-[#22a4ef] transition">Call Now</a>
                </div>

                {/* Contact Info Item 2 */}
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#31c4f3] text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold">Email Address</p>
                  <p className="mt-3 text-lg sm:text-xl font-bold text-slate-900 break-all">info@samyuktgujaratisamaj.com</p>
                  <a href="mailto:info@samyuktgujaratisamaj.com" className="inline-block mt-2 text-[#31c4f3] font-semibold hover:text-[#22a4ef] transition">Send Email</a>
                </div>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-[#31c4f3] to-blue-500 rounded-[24px] p-6 sm:p-8 text-white shadow-lg shadow-[#31c4f3]/30">
              <p className="text-sm sm:text-base font-semibold opacity-90 mb-2">Response Time</p>
              <p className="text-xl sm:text-2xl font-bold">We reply within 24 hours</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-[32px] border border-slate-200 p-8 sm:p-10 shadow-2xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#31c4f3]/15 transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2">Send Us a Message</h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">Full Name *</label>
                <input 
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300" 
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">Email Address *</label>
                <input 
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300" 
                />
              </div>

              {/* Subject Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">Subject</label>
                <input 
                  type="text"
                  placeholder="Event inquiry, community collaboration..."
                  className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300" 
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 group-focus-within:text-[#31c4f3] transition">Message *</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  required
                  className="w-full rounded-2xl border-2 border-slate-200 bg-slate-50 px-5 py-3 text-slate-900 placeholder-slate-400 outline-none resize-none transition-all duration-300 focus:border-[#31c4f3] focus:bg-white focus:shadow-lg focus:shadow-[#31c4f3]/20 hover:border-slate-300" 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#31c4f3] to-blue-500 hover:from-[#22a4ef] hover:to-blue-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#31c4f3]/40 active:scale-95 flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <p className="text-xs text-slate-500 text-center">* Required fields</p>
            </form>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default ContactPage
