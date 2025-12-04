import { FiZap } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <FiZap /> AI-Powered Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Build Intelligent
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 dark:from-blue-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
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
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Get Started Free
          </a>
          <a
            href="#how-it-works"
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Automation Actions
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              AI Providers Integrated
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              Visual Interface
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
