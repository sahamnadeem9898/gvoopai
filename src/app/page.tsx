export default function Home() {
  return (
    <div className="min-h-screen bg-[#16213E]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A2E]/90 backdrop-blur-sm border-b border-[#0F3460]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">GvoopAI</div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-white hover:text-[#E94560] transition-colors">
              Features
            </a>
            <a href="#contact" className="text-white hover:text-[#E94560] transition-colors">
              Contact
            </a>
            <button className="px-6 py-2 bg-[#E94560] text-white rounded-lg font-medium hover:bg-[#d63a50] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Intelligent AI Solutions
            <span className="block mt-2 bg-gradient-to-r from-[#E94560] to-[#0F3460] bg-clip-text text-transparent">
              Powered by GvoopAI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence.
            Automate workflows, gain insights, and scale faster than ever before.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-[#E94560] text-white rounded-lg font-semibold text-lg hover:bg-[#d63a50] transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-[#0F3460] text-white rounded-lg font-semibold text-lg hover:bg-[#1a4f8a] transition-all hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            Why Choose GvoopAI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#16213E] p-8 rounded-xl border border-[#0F3460] hover:border-[#E94560] transition-colors">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Process data at unprecedented speeds with our optimized AI infrastructure.
                Get results in milliseconds, not minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#16213E] p-8 rounded-xl border border-[#0F3460] hover:border-[#E94560] transition-colors">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-grade encryption and compliance with industry standards.
                Your data is protected with military-grade security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#16213E] p-8 rounded-xl border border-[#0F3460] hover:border-[#E94560] transition-colors">
              <div className="w-16 h-16 bg-[#E94560] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-gray-300">
                Gain actionable insights from your data with advanced AI analytics.
                Make data-driven decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#E94560] to-[#0F3460] rounded-2xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already using GvoopAI to revolutionize their operations.
          </p>
          <button className="px-10 py-4 bg-white text-[#1A1A2E] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] py-12 px-6 border-t border-[#0F3460]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">GvoopAI</div>
          <p className="text-gray-400 mb-6">
            Powering the future of intelligent automation
          </p>
          <div className="flex gap-6 justify-center text-gray-400">
            <a href="#" className="hover:text-[#E94560] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E94560] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#E94560] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
