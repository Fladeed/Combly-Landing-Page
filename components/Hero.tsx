import { FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-medical/10 to-white dark:from-primary/20 dark:via-medical/20 dark:to-gray-900 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-primary dark:text-primary flex items-center gap-2">
            <FiZap /> AI-Powered Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Build Intelligent
          <br />
          <span className="bg-gradient-to-r from-primary to-medical bg-clip-text text-transparent">
            Workflow Automation
          </span>
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Create powerful automation workflows with visual selectors, AI
          assistance, and seamless cross-website execution. No coding required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="bg-gradient-to-r from-primary to-medical text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow"
          >
            Get Started Free
          </a>
          <a
            href="#how-it-works"
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary dark:hover:border-primary transition-colors"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary dark:text-primary mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Automation Actions
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-medical dark:text-medical mb-2">
              3
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              AI Providers Integrated
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success dark:text-success mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Visual Interface
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
