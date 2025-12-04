import { FiDownload, FiBook } from "react-icons/fi";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-primary to-medical px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Automate Your Workflows?
        </h2>
        <p className="text-xl text-white/90 mb-12">
          Get started with Combly today and experience the power of AI-driven
          automation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/your-repo/combly"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center justify-center gap-2"
          >
            <FiDownload className="w-5 h-5" />
            Download Extension
          </a>
          <a
            href="https://github.com/your-repo/combly#readme"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <FiBook className="w-5 h-5" />
            View Documentation
          </a>
        </div>

        <p className="mt-8 text-white/80 text-sm">
          Free and open source • Works in Chrome, Edge, and Firefox
        </p>
      </div>
    </section>
  );
}
