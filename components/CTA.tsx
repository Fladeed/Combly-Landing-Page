import { FiDownload, FiBook } from "react-icons/fi";

export default function CTA() {
  return (
    <section id="download" className="py-20 px-6 bg-primary-gradient">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Ready to Transform Your Browsing?
          </h2>
          <p className="text-xl md:text-2xl text-white/90">
            Install Combly.ai and start automating your web workflows today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:shadow-2xl transition-shadow inline-flex items-center gap-2"
            >
              <FiDownload className="w-5 h-5" />
              Install for Chrome
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <FiBook className="w-5 h-5" />
              View Documentation
            </a>
          </div>

          <div className="pt-8 flex justify-center gap-8 text-white/80">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500K+</div>
              <div className="text-sm">Automations Run</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
